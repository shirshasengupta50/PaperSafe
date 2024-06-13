const CrudRepository = require('./crudRepository');
const { XMarkSheet } = require('../models/index');

class XMarkSheetRepository extends CrudRepository{
    constructor(){
        super(XMarkSheet);
    }
}

module.exports = XMarkSheetRepository;