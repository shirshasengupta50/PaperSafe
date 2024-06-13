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

module.exports = {
    userRegistration
}