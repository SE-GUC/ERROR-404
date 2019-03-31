//const jest = require('jest')
const axios = require('axios')
const User = require('./models/User')
const functions =
{
    getUsers: async()=>{
        const Users = await axios.get('http://localhost:3000/api/Users')
        return Users
    },
  

    getUserByIdFound : async()=>{
        //const user =  User.findOne()
        const allUsers = await axios.get('http://localhost:3000/api/Users')
        const userId = allUsers.data.data[0]._id
        const userFound = await axios.get('http://localhost:3000/api/Users/'+userId)
        

        return userFound

    },

    getUserByIdNotFound : async()=>{
        const user = await axios.get('http://localhost:3000/api/Users/1')
        return user

    },
   
    updateUserScore : async() =>{
        const user = await axios.post('http://localhost:3000/api/Users/register',{
            
            type:"member",
            firstName:"Nadin ",
            lastName:"7ob 3omry",
            birthDate:"12-11-1998",
            bio:"heheehhe",
            email:"kokkkkk@student.guc.edu.eg",
            password:"boooom1234",
            clubs:["tiq"],
            house:"pegasus"
            
        })
        const userId = user.data.data._id
        const updated = await axios.put('http://localhost:3000/api/Users/'+userId+'/7')
        const deleteCreated = await axios.delete('http://localhost:3000/api/Users/'+userId)
        return updated
    },




    deleteUserSuccess : async()=>{
        //const user =  await createUserTesting()
        const user = await axios.post('http://localhost:3000/api/Users/register',{
            
            type:"member",
            firstName:"Nadin ",
            lastName:"7ob 3omry",
            birthDate:"12-11-1998",
            bio:"heheehhe",
            email:"kaaaaaaaaaaa@student.guc.edu.eg",
            password:"boooom1234",
            clubs:["tiq"],
            house:"pegasus"
            
        })
        const userId = user.data.data._id
    
        const deleteduser = await axios.delete('http://localhost:3000/api/Users/'+userId)
        return deleteduser
    },
}
module.exports = functions