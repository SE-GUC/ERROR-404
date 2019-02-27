

const uuid = require ('uuid')
//User model
class user {
    constructor(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs){
        this.type=type;
        this.firstname=firstname;
        this.lastname=lastname;
        this.birth_date=birth_date;
        this.bio=bio;
        this.email=email;
        this.password=password;
        this.house=house;
        this.score=score;
        this.din=din;
        this.dor=dor;
        this.clubs=clubs;
        this.id=uuid.v4();
    };
};
module.exports=user;
