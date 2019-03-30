//const jest = require('jest')
const axios = require('axios')
const User = require('./models/User')
const Users = require('./routes/api/Users')
const Content = require('./models/Content')
const Contents = require('./routes/api/Contents')
const functions =
{
    getUsers: async()=>{
        const Users = await axios.get('http://localhost:3000/api/Users')
        return Users
    },
    getUserByIdFound : async()=>{
        const user =  User.findOne()
        const userId = user._id
        const userFound = await axios.get('http://localhost:3000/api/Users/'+userId)
        

        return userFound

    },
    getUserByIdNotFound : async()=>{
        const user = await axios.get('http://localhost:3000/api/Users/1')
        return user

    },
    createUserTesting : async() =>{
        const user = await axios.post('http://localhost:3000/api/Users/register',{
            
            type:"member",
            firstName:"Nadin ",
            lastName:"7ob 3omry",
            birthDate:"12-11-1998",
            bio:"heheehhe",
            email:"nadin@student.guc.edu.eg",
            password:"boooom1234",
            clubs:["tiq"],
            house:"pegasus"
            
        })
        return user
    },

    updateUserScore : async() =>{
        const user = await axios.post('http://localhost:3000/api/Users/register',{
            
            type:"member",
            firstName:"Nadin ",
            lastName:"7ob 3omry",
            birthDate:"12-11-1998",
            bio:"heheehhe",
            email:"nadin@student.guc.edu.eg",
            password:"boooom1234",
            clubs:["tiq"],
            house:"pegasus"
            
        })
        const id = user.data.data._id
        const updated = await axios.put('http://localhost:3000/api/Users/'+id+'/7')
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
            email:"nadin@student.guc.edu.eg",
            password:"boooom1234",
            clubs:["tiq"],
            house:"pegasus"
            
        })
        const id = user.data.data._id
        //console.log(id)
        const deleteduser = await axios.delete('http://localhost:3000/api/Users/'+id)
        return deleteduser
    },
    deleteUserFailed : async()=>{
        const deleteuser = await axios.delete('http://localhost:3000/api/Users/2')
        
        return deleteuser
    },
    viewcontent : async()=>{
        const getuser = await axios.get('http://localhost:3000/api/Contents/')
        return getuser
    },
    viewcertaincontent : async()=>{
        const content = Content.findOne()
        const contId = content._id
        const getcertainuser = await axios.get('http://localhost:3000/api/Contents/'+contId)
        return getcertainuser
    }
}
module.exports = functions


    // viewcertaincontent : async(id)=>{
    //     const getcertainuser = await axios.get('http://localhost:3000/api/Contents/'+id)
    //     return getcertainuser