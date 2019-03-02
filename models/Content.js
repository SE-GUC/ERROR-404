
const uuid = require('uuid')
class Content {
    constructor(date,type,description){
        this.date = date ; 
        this.type = type ; 
        this.description = description ; 
        this.id = uuid.v4();
    }
}
module.exports = Content


