const CrudRepository = require('./crudRepository');
const { PANCard } = require('../models/index');

class PANCardRepository extends CrudRepository{
    constructor(){
        super(PANCard);
    }
}

module.exports = PANCardRepository;