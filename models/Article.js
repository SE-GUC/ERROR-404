const uuid = require ('uuid')
//User model
class Article {
    constructor(title,description,date,author,comments){
       this.title=title;
       this.description=description;
       this.date=date;
       this.author=author;
       this.comments=comments;
       this.id=uuid.v4();
    };
};
module.exports=Article;
