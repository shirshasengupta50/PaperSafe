const {CrudRepository} = require('./index');
const { MovieTicket } = require('../models/index');

class MovieTicketRepository extends CrudRepository{
    constructor(){
        super(MovieTicket);
    }

    async getByUserID(userID){
        try {
            const response = await this.model.find({userID});
            return response;
        } catch (error) {
            console.log("Error in Aadhaar Repository Layer");
            throw {error};
        }
    }
}

module.exports = MovieTicketRepository;