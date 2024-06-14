const { UserService } = require('../services/index');

const userService = new UserService();

const userRegistration = async(req, res)=>{
    try {
        const data = req.body;

        const response = await userService.registerUser(data);
        return res.status(201).json({
            data: response,
            error:{},
            success: true,
            message: "User Successfully Registered"
        });

    } catch (error) {
        console.log("Error in User Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Register User"
        });
    }
}

const otpRequest = async(req, res)=>{
    try {
        const { emailID } = req.body;

        const response = await userService.sendOPT(emailID);
        return res.status(200).json({
            data: response,
            error:{},
            success: true,
            message: "OTP Successfully Sent"
        });

    } catch (error) {
        console.log("Error in User Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Send OTP"
        });
    }
}

const otpVerification = (req, res)=>{
    try {
        const { emailID, otp } = req.body;

        const response = userService.verifyOTP(emailID, otp);
        return res.status(200).json({
            data: response,
            error:{},
            success: true,
            message: "Verified"
        });

    } catch (error) {
        console.log("Error in User Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Invalid OTP"
        });
    }
}

module.exports = {
    userRegistration,
    otpRequest,
    otpVerification
}