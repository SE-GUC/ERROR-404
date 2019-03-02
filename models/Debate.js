const uuid = require('uuid')
class Debate {
    constructor(title,category,date,description,info){
        this.title = title
        this.category = category
        this.date = date
        this.description = description
        this.info = info
        this.id = uuid.v4()
    }
}
module.exports=Debate
