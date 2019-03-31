const express = require('express')
const app= express();
app.use(express.json());

const user = [
    {
        type:'member',
        firstname:'Mahy',
        lastname: 'Ali',
        birth_date:'23-4-1994',
        bio: 'expert debater ',
        email: 'mali@gmail.com',
        password:'mahy94',
        house:'Pegasus',
        score: 278,
        din:'1-10-2017',
        dor:null,
        clubs:['TIQ']

    },
    {
        type:'supervisor',
        firstname:'Hania',
        lastname: 'Essam',
        birth_date:'26-6-1995',
        bio: 'Logoistics supervisor ',
        email: 'hania@gmail.com',
        password:'hania123',
        house:'neutral',
        score: null,
        din:'1-11-2018',
        dor:null,
        clubs:['TIQ']
    },
    {
    type:'disciple',
    firstname:'Maro',
    lastname: 'Marwan',
    birth_date:'23-6-2000',
    bio: 'young hunter ',
    email: 'maro@yahoo.com',
    password:'marrroo',
    house:'Orion',
    score: 198,
    din:'1-10-2019',
    dor:'1-11-2019',
    clubs:['TIQ']
},
{
    type:'member',
    firstname:'Nada',
    lastname: 'Botros',
    birth_date:'23-9-1998',
    bio: ' Sun Hunter ',
    email: 'nbotros@gmail.com',
    password:'nbtros98',
    house:'Orion',
    score: 341,
    din:'1-11-2018',
    dor:'1-11-2019',
    clubs:['TIQ','MUN']
}
]