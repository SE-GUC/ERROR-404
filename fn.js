const axios = require('axios');
const Article = require('./models/Article')
const Articles = require('./routes/api/Articles')
const User = require('./models/User')
const Users = require('./routes/api/Users')
const functions = {



    //getingg all users
    getUsers: async()=>{
        const users = await axios.get('http://localhost:3000/api/Users')
        return users
        },
    
   //Testing that TIQ admins are able to create new users
    createUser: async() =>{
        const newUser = await axios.post('http://localhost:3000/api/Users/register',{
        type : "member",
        firstName: "Nada",
        lastName:"bob",
        birthDate:"1/1/1990",
        bio:"hey there",
        email:"hobbalalla@student.guc.edu.eg",
        password:"12345678",
        house:"Orion",
        clubs:["TIQ"]
    } )

    const newid = newUser.data.data._id
    const deleteU =await axios.delete('http://localhost:3000/api/Users/'+newid)  

    return newUser
    },



//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

   

     updateUser : async() =>{                                                                     //doneeeee
        const user = await axios.post('http://localhost:3000/api/Users/register',{
            
            type:"member",
            firstName:"lila ",
            lastName:"ramy",
            birthDate:"12-11-1998",
            bio:"ana lillla Rami",
            email:"ziiziiziz@student.guc.edu.eg",
            password:"lailaa1234",
            clubs:["tiq"],
            house:"Orionn"
            
        })
        const newid = user.data.data._id
     
        const updateUser = await axios.put('http://localhost:3000/api/Users/'+newid,{
            firstName:"Lakoooooila",
            lastName:"Ahmzzzzed",
    
        }  )
        const deleteduser = await axios.delete('http://localhost:3000/api/Users/'+newid)       
        // console.log(deleteduser)
    
        return updateUser
    },


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

   // Testing that users are able to view certain Articles with id=1
    getArticleById :async id =>{

           const article = await axios.get('http://localhost:3000/api/Articles/'+id)
           return article

    },
    //--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//     // Testing that users are able to view Articles
    getArticles: async () => {                                                                 //done
        const articles =await axios.get("http://localhost:3000/api/Articles")
        return articles

    },


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


//     //Testing that TIQ admins are able to create new motions on the Debate live   

    createMotion : async() =>{                                                                  //done
        const motion =await axios.post("http://localhost:3000/api/Chatbars/create", {
        debateLiveTitle:"Engineering",
        date:"1/1/2011"   
        })   

        return motion
    },


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


    getDebateLive: async () => {
        const debateLives = await axios.get('http://localhost:3000/api/Chatbars')
        return debateLives
    },
 

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//     //Testing that the number of responses are always updated
    updateNumberOfResponses :async id =>{
        // const motion =await axios.post("http://localhost:3000/api/Chatbars/create", {
          
        // debateLiveTitle:"athletics",
        // date:"1/1/2019"   
        // }) 

        //const newid = motion.data.data._id
        
        const wantedMotion = await axios.get("http://localhost:3000/api/Chatbars/"+id)
        const oldNoOFResponses = wantedMotion.data.numberOfResponses
        const newO = await axios.put("http://localhost:3000/api/Chatbars/for/"+id,
        {
            forResponses: ["I agree with that.."]
        })
        const newNoOfResponses=newO.data.data.numberOfResponses
        const deleteMotion=await axios.delete("http://localhost:3000/api/Chatbars/"+id)

        return newNoOfResponses - oldNoOFResponses
    }


   
};




module.exports = functions;