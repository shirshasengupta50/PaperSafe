const { generateOTP, saveOTP, validateOTP, sendOTP } = require('../utils/helper/index');
const { UserRepository } = require('../repository/index');
const { uniqueIDGenerator } = require('../utils/helper/index');

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
        this.uniqueIDGenerator = uniqueIDGenerator;
    }

    async registerUser(data){
        try {
            const uniqueID = uniqueIDGenerator(data.firstName, data.mobileNumber);
            data = {...data, uniqueID: uniqueID};

            const response = await this.userRepository.create(data);
            return response;

        } catch (error) {
            console.log("Error Occure in User Service Layer");
            throw error;
        }
    }

    async sendOPT(phoneNum){
        try {
            const otp = generateOTP();
            console.log(otp);
            saveOTP(phoneNum, otp);
            console.log('done');
            await sendOTP(phoneNum, otp);
            console.log('done');
            const response = 'OTP Sent Successfully';

            return response;

        } catch (error) {
            console.log("Error Occur in User Service Layer");
            throw error;
        }
    }

    verifyOTP(phoneNum, otp){

        if(validateOTP(phoneNum, otp)){

            const user = this.getUserByNumber(phoneNum);

            if(user){

                return {
                    doExist: true,
                    user: user
                };

            }else{

                return {
                    doExist: false,
                    user: {}
                };
            }

        }else{
            throw new Error('Invalid OTP');
        }
    }


    async getUserById(id){
        try {
            const response = this.userRepository.getById(id);
            return response;
        } catch (error) {
            console.log("Error in Service Layer");
            throw error;
        }
    }

    async getUserByNumber(mobileNumber){
        try {
            const response = this.userRepository.getByNumber(mobileNumber);
            return response;
        } catch (error) {
            console.log("Error in Service Layer");
            throw error;
        }
    }

    async deleteUser(id){
        try {
            const response = this.userRepository.remove(id);
            return response;
        } catch (error) {
            console.log("Error in Service Layer");
            throw error;
        }
    }
}

module.exports = UserService;