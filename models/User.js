const uuid = require ('uuid')
const express = require('express')

//User model

class user {

    constructor(type,firstName,lastName,birthDate,bio,email,password,house,score,din,dor,clubs){

        this.type=type;

        this.firstName=firstName;

        this.lastName=lastName;

        this.birthDate=birthDate;

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
