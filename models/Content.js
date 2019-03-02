const uuid = require('uuid')
class content {
    constructor(date,type,description){
        this.date = date
        this.type = type
        this.description = description
        this.id = uuid.v4()
    }
}
module.exports = content

