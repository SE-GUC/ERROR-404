const axios = require('axios');
const Article = require('./models/Article')
const Articles = require('./routes/api/Articles')
const User = require('./models/User')
const Users = require('./routes/api/Users')
const functions = {


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
    getAllClubs : async () => {
        const clubs = await axios.get('http://localhost:3000/api/Clubs');
        return clubs;
    },
    createContent : async content => {
        const newContent = await axios.post('http://localhost:3000/api/Contents', content);
        return newContent;
    },
    updateContent : async (id, updatedData) => {
        const updatedContent = await axios.put(`http://localhost:3000/api/Contents/${id}`, updatedData);
        return updatedContent;
    },
    deleteContent : async id => {
        const deletedContent = await axios.delete(`http://localhost:3000/api/Contents/${id}`);
        return deletedContent;
    },



 //getingg all users
    getUsers: async()=>{
        const users = await axios.get('http://localhost:3000/api/Users')
        return users
        },
    
   //Testing that TIQ admins are able to create new users
    createUser: async() =>{
        const newUser = await axios.post('http://localhost:3000/api/Users/register',{
        type : "member",
        firstName: "nadda",
        lastName:"kok",
        birthDate:"1/1/1990",
        bio:"hey there",
        email:"zoombahanam@student.guc.edu.eg",
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
            email:"zobba@student.guc.edu.eg",
            password:"lailaa1234",
            clubs:["tiq"],
            house:"Orionn"
            
        })
        const newid = user.data.data._id
     
        const updateUser = await axios.put('http://localhost:3000/api/Users/'+newid,{
            firstName:"karkora",
            lastName:"amoraa",
    
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
    },



//     getArticles: async () => {
//         const Articles = await axios.get('http://localhost:3000/api/Articles/')
//         return Articles
//         },
    createArticles:async () => {
       const newArticle = await axios.post("http://localhost:3000/api/Articles/create",{
        
            title:"The downfall of global capitalism.",
            description: "This article discuss downfall of global capitalism.",
            author: "BOAs",
            date: "25-3-2019"
        })
        return newArticle
        },
        updateArticles:async() =>{
            const newArticle = await axios.post("http://localhost:3000/api/Articles/create",{
        
                title:"The downfall of global capitalism.",
                description: "This article discuss downfall of global capitalism.",
                author: "BOAs",
                date: "25-3-2019"
            })
              const id = newArticle.data.data._id
            const updatedArticle = await axios.put("http://localhost:3000/api/Articles/"+id,{
                description: "Is the downfall of global capitalism real, read the article to find out"
            })
            
            return updatedArticle
        },
        deleteArticles: async()=>{
            const newArticle = await axios.post("http://localhost:3000/api/Articles/create",{
        
                title:"The downfall of global capitalism.",
                description: "This article discuss downfall of global capitalism.",
                author: "BOAs",
                date: "25-3-2019"
            })
              const id = newArticle.data.data._id
                    const deleteArticle = await axios.delete("http://localhost:3000/api/Articles/"+id)
                    return deleteArticle
        },
        getDebateLive: async () => {
            const debateLives = await axios.get('http://localhost:3000/api/Chatbars/')
            return debateLives
            },
            deleteDebateLive: async()=>{
                const newDebateLive = await axios.post("http://localhost:3000/api/Chatbars/",{
        
                    debateLiveTitle:"TH supports the decline of the nations-state's power in an increasingly globalised world.",
                    date: "12-11-2018",
                    
                })
                  const id = newDebateLive.data.data._id
                        const deleteDebateLive= await axios.delete("http://localhost:3000/api/Chatbars/"+id)
                        return deleteDebateLive
            }
};
    


module.exports = functions;