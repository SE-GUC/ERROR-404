const uuid = require ('uuid')
//User model
class Content {
    constructor(type,date,description){
        this.type=type;
        this.date=date;
        this.description=description;
        this.id=uuid.v4();
    };
};
module.exports=Content;