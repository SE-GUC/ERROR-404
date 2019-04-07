const axios = require('axios');
const Article = require('./models/Article')
const Articles = require('./routes/api/Articles')
const User = require('./models/User')
const Users = require('./routes/api/Users')
const functions = {
getUsers: async()=>{
<<<<<<< HEAD
        const Users = await axios.get('http://localhost:5000/api/Users')
=======

        return Users
    },
    getUserByIdFound : async()=>{
        const user =  User.findOne()
        const userId = user._id
<<<<<<< HEAD
        const userFound = await axios.get('http://localhost:5000/api/Users/'+userId)
        return userFound
    },
    getAllClubs : async () => {
        const clubs = await axios.get('http://localhost:5000/api/Clubs');
        return clubs;
    },
	 getAllContent : async () => {
        const content = await axios.get('http://localhost:5000/api/Contents');
=======

        return content;
    }
    ,
  
   getAllContent : async () => {
<<<<<<< HEAD
        const content = await axios.get('http://localhost:5000/api/Contents');
=======

        return content;
    }
    ,
   
    createContent : async content => {
<<<<<<< HEAD
        const newContent = await axios.post('http://localhost:5000/api/Contents', content);
        return newContent;
    },
    updateContent : async (id, updatedData) => {
        const updatedContent = await axios.put(`http://localhost:5000/api/Contents/${id}`, updatedData);
        return updatedContent;
    },
    deleteContent : async id => {
        const deletedContent = await axios.delete(`http://localhost:5000/api/Contents/${id}`);
=======

        return deletedContent;
    },


    
 viewcontent : async()=>{
<<<<<<< HEAD
        const getuser = await axios.get('http://localhost:5000/api/Contents/')
        return getuser
    },
    viewcertaincontent : async()=>{
        const allContent = await axios.get('http://localhost:5000/api/Contents')
        const contId = allContent.data.data[0]._id
        const getcertainuser = await axios.get('http://localhost:5000/api/Contents/'+contId)
=======

        return getcertainuser
    },


 //getingg all users
    getUsers: async()=>{
<<<<<<< HEAD
        const users = await axios.get('http://localhost:5000/api/Users')
=======
        const users = await axios.get('http://localhost:3000/api/Users')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        return users
        },
    
   //Testing that TIQ admins are able to create new users
    createUser: async() =>{
<<<<<<< HEAD
        const newUser = await axios.post('http://localhost:5000/api/Users/register',{
=======

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
<<<<<<< HEAD
    const deleteU =await axios.delete('http://localhost:5000/api/Users/'+newid)  
=======


    return newUser
    },



//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

   

updateUser : async(id,updateUser) =>{   
<<<<<<< HEAD
    const updatedUser = await axios.put(`http://localhost:5000/api/Users/${id}`, updateUser);
=======
    const updatedUser = await axios.put(`http://localhost:3000/api/Users/${id}`, updateUser);
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
    return updatedUser;
 },


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

   // Testing that users are able to view certain Articles with id=1
    getArticleById :async id =>{

<<<<<<< HEAD
           const article = await axios.get('http://localhost:5000/api/Articles/'+id)
=======
           const article = await axios.get('http://localhost:3000/api/Articles/'+id)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
           return article

    },
    //--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//     // Testing that users are able to view Articles
    getArticles: async () => {                                                                 //done
<<<<<<< HEAD
        const articles =await axios.get("http://localhost:5000/api/Articles")
=======
        const articles =await axios.get("http://localhost:3000/api/Articles")
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        return articles

    },


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


//     //Testing that TIQ admins are able to create new motions on the Debate live   

    createMotion : async() =>{                                                                  //done
<<<<<<< HEAD
        const motion =await axios.post("http://localhost:5000/api/Chatbars/create", {
=======
        const motion =await axios.post("http://localhost:3000/api/Chatbars/create", {
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        debateLiveTitle:"Engineering",
        date:"1/1/2011"   
        })   

        return motion
    },


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


    getDebateLive: async () => {
<<<<<<< HEAD
        const debateLives = await axios.get('http://localhost:5000/api/Chatbars')
=======
        const debateLives = await axios.get('http://localhost:3000/api/Chatbars')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        return debateLives
    },
 

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//     //Testing that the number of responses are always updated
    updateNumberOfResponses :async id =>{
<<<<<<< HEAD
        // const motion =await axios.post("http://localhost:5000/api/Chatbars/create", {
=======
        // const motion =await axios.post("http://localhost:3000/api/Chatbars/create", {
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
          
        // debateLiveTitle:"athletics",
        // date:"1/1/2019"   
        // }) 

        //const newid = motion.data.data._id
        
<<<<<<< HEAD
        const wantedMotion = await axios.get("http://localhost:5000/api/Chatbars/"+id)
        const oldNoOFResponses = wantedMotion.data.numberOfResponses
        const newO = await axios.put("http://localhost:5000/api/Chatbars/for/"+id,
=======
        const wantedMotion = await axios.get("http://localhost:3000/api/Chatbars/"+id)
        const oldNoOFResponses = wantedMotion.data.numberOfResponses
        const newO = await axios.put("http://localhost:3000/api/Chatbars/for/"+id,
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        {
            forResponses: ["I agree with that.."]
        })
        const newNoOfResponses=newO.data.data.numberOfResponses
<<<<<<< HEAD
        const deleteMotion=await axios.delete("http://localhost:5000/api/Chatbars/"+id)
=======
        const deleteMotion=await axios.delete("http://localhost:3000/api/Chatbars/"+id)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78

        return newNoOfResponses - oldNoOFResponses
    },



//     getArticles: async () => {
<<<<<<< HEAD
//         const Articles = await axios.get('http://localhost:5000/api/Articles/')
//         return Articles
//         },
    createArticles:async () => {
       const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
=======
//         const Articles = await axios.get('http://localhost:3000/api/Articles/')
//         return Articles
//         },
    createArticles:async () => {
       const newArticle = await axios.post("http://localhost:3000/api/Articles/create",{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        
            title:"The downfall of global capitalism.",
            description: "This article discuss downfall of global capitalism.",
            author: "BOAs",
            date: "25-3-2019"
        })
        return newArticle
        },
        updateArticles:async() =>{
<<<<<<< HEAD
            const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
=======
            const newArticle = await axios.post("http://localhost:3000/api/Articles/create",{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        
                title:"The downfall of global capitalism.",
                description: "This article discuss downfall of global capitalism.",
                author: "BOAs",
                date: "25-3-2019"
            })
              const id = newArticle.data.data._id
<<<<<<< HEAD
            const updatedArticle = await axios.put("http://localhost:5000/api/Articles/"+id,{
=======
            const updatedArticle = await axios.put("http://localhost:3000/api/Articles/"+id,{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
                description: "Is the downfall of global capitalism real, read the article to find out"
            })
            
            return updatedArticle
        },
        deleteArticles: async()=>{
<<<<<<< HEAD
            const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
=======
            const newArticle = await axios.post("http://localhost:3000/api/Articles/create",{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        
                title:"The downfall of global capitalism.",
                description: "This article discuss downfall of global capitalism.",
                author: "BOAs",
                date: "25-3-2019"
            })
              const id = newArticle.data.data._id
<<<<<<< HEAD
                    const deleteArticle = await axios.delete("http://localhost:5000/api/Articles/"+id)
                    return deleteArticle
        },
        getDebateLive: async () => {
            const debateLives = await axios.get('http://localhost:5000/api/Chatbars/')
            return debateLives
            },
            deleteDebateLive: async()=>{
                const newDebateLive = await axios.post("http://localhost:5000/api/Chatbars/create",{
=======
                    const deleteArticle = await axios.delete("http://localhost:3000/api/Articles/"+id)
                    return deleteArticle
        },
        getDebateLive: async () => {
            const debateLives = await axios.get('http://localhost:3000/api/Chatbars/')
            return debateLives
            },
            deleteDebateLive: async()=>{
                const newDebateLive = await axios.post("http://localhost:3000/api/Chatbars/create",{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        
                    debateLiveTitle:"TH supports the decline of the nations-state's power in an increasingly globalised world.",
                    date: "12-11-2018",
                    
                })
                  const id = newDebateLive.data.data._id
<<<<<<< HEAD
                        const deleteDebateLive= await axios.delete("http://localhost:5000/api/Chatbars/"+id)
=======
                        const deleteDebateLive= await axios.delete("http://localhost:3000/api/Chatbars/"+id)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
                        return deleteDebateLive
            },

			 getClubById : async id => {
<<<<<<< HEAD
        const club = await axios.get(`http://localhost:5000/api/Clubs/${id}`);
        return club;
    },
    getAllClubs : async () => {
        const clubs = await axios.get('http://localhost:5000/api/Clubs');
        return clubs;
    },
    createClub : async club => {
        const newClub = await axios.post('http://localhost:5000/api/Clubs', club);
        return newClub;
    },
    updateClub : async (id,updatedData) => {
        const updatedClub = await axios.put(`http://localhost:5000/api/Clubs/${id}`, updatedData);
        return updatedClub;
    },
    deleteClub : async id => {
        const deletedClub = await axios.delete(`http://localhost:5000/api/Clubs/${id}`);
        return deletedClub;
    },
    getDebates: async () => {
        const debates = await axios.get('http://localhost:5000/api/Debates')
=======
        const club = await axios.get(`http://localhost:3000/api/Clubs/${id}`);
        return club;
    },
    getAllClubs : async () => {
        const clubs = await axios.get('http://localhost:3000/api/Clubs');
        return clubs;
    },
    createClub : async club => {
        const newClub = await axios.post('http://localhost:3000/api/Clubs', club);
        return newClub;
    },
    updateClub : async (id,updatedData) => {
        const updatedClub = await axios.put(`http://localhost:3000/api/Clubs/${id}`, updatedData);
        return updatedClub;
    },
    deleteClub : async id => {
        const deletedClub = await axios.delete(`http://localhost:3000/api/Clubs/${id}`);
        return deletedClub;
    },
    getDebates: async () => {
        const debates = await axios.get('http://localhost:3000/api/Debates')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        return debates
        },

    createDebate: async ()=>{
<<<<<<< HEAD
        const newDebate = await axios.post('http://localhost:5000/api/Debates',{
=======
        const newDebate = await axios.post('http://localhost:3000/api/Debates',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
                title: "DebateTest",
                category : "Test Category",
                date : "1-1-2019",
                info : "Debate Created in the Test",
                description : "Creating this debate to test"
        })
        return newDebate
    },
    deleteDebate: async(id)=>{
<<<<<<< HEAD
        const response = await axios.delete(`http://localhost:5000/api/Debates/${id}`)
        return response
    },
    updateDebate: async(id)=>{
        const response = await axios.put(`http://localhost:5000/api/Debates/${id}`,{
=======
        const response = await axios.delete(`http://localhost:3000/api/Debates/${id}`)
        return response
    },
    updateDebate: async(id)=>{
        const response = await axios.put(`http://localhost:3000/api/Debates/${id}`,{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
            title: "DebateUpdatedTest",
            category : "Updated Category",
            date : "1-1-2019",
            info : "Debate Created in the Update Test",
            description : "Updating this debate to test"
        })
        return response
    },
    getDebateById: async(id)=>{
<<<<<<< HEAD
        const response = await axios.get(`http://localhost:5000/api/Debates/${id}`)
        return response
    },
    createInvalidDebate: async ()=>{
        const newDebate = await axios.post('http://localhost:5000/api/Debates',{
=======
        const response = await axios.get(`http://localhost:3000/api/Debates/${id}`)
        return response
    },
    createInvalidDebate: async ()=>{
        const newDebate = await axios.post('http://localhost:3000/api/Debates',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
                title: "DebateTest",
            category : "Updated Category",
                info : "Debate Created in the Test",
                description : "Creating this debate to test"
        })
        return newDebate
    },
    updateInvalidDebate: async(id)=>{
<<<<<<< HEAD
        const response = await axios.put(`http://localhost:5000/api/Debates/${id}`,{
=======
        const response = await axios.put(`http://localhost:3000/api/Debates/${id}`,{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
            title: "D",
            category : "Updated Category",
            date : "1-1-2019",
            info : "Updated by Invalid Schema",
            description : "Updating this debate to test"
        })
        return response
    },
    getInvalidPage: async()=>{
<<<<<<< HEAD
        const response = await axios.get('http://localhost:5000/apv/Debates')
=======
        const response = await axios.get('http://localhost:3000/apv/Debates')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        return response
    },
    
    searchDebatesbydate: async () => {
<<<<<<< HEAD
        const newDebate=await axios.post('http://localhost:5000/api/Debates',{
=======
        const newDebate=await axios.post('http://localhost:3000/api/Debates',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
          
            title : "smoking",
            category : "health",
            date  : "12-21-2001",
            description : "gdhakvcladbhc",
            info : "aksnansd;akn"


        })
<<<<<<< HEAD
        const debate = await axios.get('http://localhost:5000/api/Debates/searchbydate/12-21-2001')
=======
        const debate = await axios.get('http://localhost:3000/api/Debates/searchbydate/12-21-2001')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78

        return debate

        },
        searchDebatesbycategory: async () => {
<<<<<<< HEAD
            const newDebate=await axios.post('http://localhost:5000/api/Debates',{
=======
            const newDebate=await axios.post('http://localhost:3000/api/Debates',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
                title : "smoking",
                category : "health",
                date  : "12-21-2001",
                description : "gdhakvcladbhc",
                info : "aksnansd;akn"

        })
        
<<<<<<< HEAD
        const debate = await axios.get('http://localhost:5000/api/Debates/Search/health')
=======
        const debate = await axios.get('http://localhost:3000/api/Debates/Search/health')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        return debate


    },
    getFAQs: async () => {
<<<<<<< HEAD
        const FAQs = await axios.get('http://localhost:5000/api/FAQs/')
=======
        const FAQs = await axios.get('http://localhost:3000/api/FAQs/')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
        return FAQs
        },
       
        deleteFAQs: async id=>{
            
<<<<<<< HEAD
            const deletedFAQ = await axios.delete("http://localhost:5000/api/FAQs/"+id)  //a7ot id mazboot
            return deletedFAQ
        },
        searchUsersByName: async () => {
            const newUser=await axios.post('http://localhost:5000/api/Users/register',{
=======
            const deletedFAQ = await axios.delete("http://localhost:3000/api/FAQs/"+id)  //a7ot id mazboot
            return deletedFAQ
        },
        searchUsersByName: async () => {
            const newUser=await axios.post('http://localhost:3000/api/Users/register',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
                type:"alumni",
                firstName:"nouran",
                lastName:"KAMAAAAAAAL",
                birthDate: "12-21-2001",
                bio:"heeee",
                email: "nourn.blallla@student.guc.edu.eg",
                password: "jdknnuuniik",
                clubs:["scs"],
                house:"Pegasus",
                din:"1/1/2010",
                dor:"3/4/2013"


            })
<<<<<<< HEAD
            const user = await axios.get('http://localhost:5000/api/Users/Search/nouran')
            const id=newUser.data.data._id
            const deletedUser = await axios.delete("http://localhost:5000/api/Users/"+id)
=======
            const user = await axios.get('http://localhost:3000/api/Users/Search/nouran')
            const id=newUser.data.data._id
            const deletedUser = await axios.delete("http://localhost:3000/api/Users/"+id)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78

            return user

            },

            searchUsersByType: async () => {
<<<<<<< HEAD
                const newUser=await axios.post('http://localhost:5000/api/Users/register',{
=======
                const newUser=await axios.post('http://localhost:3000/api/Users/register',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
                type:"alumni",
                firstName:"nouran",
                lastName:"KAMAAAAAAAL",
                birthDate: "12-21-2001",
                bio:"heeee",
                email: "nour@student.guc.edu.eg",
                password: "jdknnuuniik",
                clubs:["scs"],
                house:"Pegasus",
                din:"1/1/2010",
                dor:"3/4/2013"
    


            })
            const id=newUser.data.data._id
<<<<<<< HEAD
            const user = await axios.get('http://localhost:5000/api/Users/Search/alumni')
            const deletedUser = await axios.delete("http://localhost:5000/api/Users/"+id)
=======
            const user = await axios.get('http://localhost:3000/api/Users/Search/alumni')
            const deletedUser = await axios.delete("http://localhost:3000/api/Users/"+id)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78

            return user


                },
getFAQById: async id => {
<<<<<<< HEAD
            const newFAQ = await axios.post("http://localhost:5000/api/FAQs/add",{
                question:"how are you ?",
                answer: "meh",
            })
            const FAQs = await axios.get('http://localhost:5000/api/FAQs/'+id)
=======
            const newFAQ = await axios.post("http://localhost:3000/api/FAQs/add",{
                question:"how are you ?",
                answer: "meh",
            })
            const FAQs = await axios.get('http://localhost:3000/api/FAQs/'+id)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
            return FAQs
            },

getUsers: async()=>{
<<<<<<< HEAD
const Users = await axios.get('http://localhost:5000/api/Users')
=======
const Users = await axios.get('http://localhost:3000/api/Users')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
return Users
},


getUserByIdFound : async()=>{
//const user =  User.findOne()
<<<<<<< HEAD
const allUsers = await axios.get('http://localhost:5000/api/Users')
const userId = allUsers.data.data[0]._id
const userFound = await axios.get('http://localhost:5000/api/Users/'+userId)
=======
const allUsers = await axios.get('http://localhost:3000/api/Users')
const userId = allUsers.data.data[0]._id
const userFound = await axios.get('http://localhost:3000/api/Users/'+userId)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78


return userFound

},

getUserByIdNotFound : async()=>{
<<<<<<< HEAD
const user = await axios.get('http://localhost:5000/api/Users/1')
=======
const user = await axios.get('http://localhost:3000/api/Users/1')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
return user

},

updateUserScore : async() =>{
<<<<<<< HEAD
const user = await axios.post('http://localhost:5000/api/Users/register',{
=======
const user = await axios.post('http://localhost:3000/api/Users/register',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
 
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
<<<<<<< HEAD
const updated = await axios.put('http://localhost:5000/api/Users/'+userId+'/7')
const deleteCreated = await axios.delete('http://localhost:5000/api/Users/'+userId)
=======
const updated = await axios.put('http://localhost:3000/api/Users/'+userId+'/7')
const deleteCreated = await axios.delete('http://localhost:3000/api/Users/'+userId)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
return updated
},




deleteUserSuccess : async()=>{
//const user =  await createUserTesting()
<<<<<<< HEAD
const user = await axios.post('http://localhost:5000/api/Users/register',{
=======
const user = await axios.post('http://localhost:3000/api/Users/register',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
 
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

<<<<<<< HEAD
const deleteduser = await axios.delete('http://localhost:5000/api/Users/'+userId)
return deleteduser
},
getAllClubs : async () => {
const clubs = await axios.get('http://localhost:5000/api/Clubs');
return clubs;
},
getAllContent : async () => {
const content = await axios.get('http://localhost:5000/api/Contents');
=======
const deleteduser = await axios.delete('http://localhost:3000/api/Users/'+userId)
return deleteduser
},
getAllClubs : async () => {
const clubs = await axios.get('http://localhost:3000/api/Clubs');
return clubs;
},
getAllContent : async () => {
const content = await axios.get('http://localhost:3000/api/Contents');
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
return content;
}
,

getAllContent : async () => {
<<<<<<< HEAD
const content = await axios.get('http://localhost:5000/api/Contents');
=======
const content = await axios.get('http://localhost:3000/api/Contents');
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
return content;
}
,

createContent : async content => {
<<<<<<< HEAD
const newContent = await axios.post('http://localhost:5000/api/Contents', content);
return newContent;
},
updateContent : async (id, updatedData) => {
const updatedContent = await axios.put(`http://localhost:5000/api/Contents/${id}`, updatedData);
return updatedContent;
},
deleteContent : async id => {
const deletedContent = await axios.delete(`http://localhost:5000/api/Contents/${id}`);
=======
const newContent = await axios.post('http://localhost:3000/api/Contents', content);
return newContent;
},
updateContent : async (id, updatedData) => {
const updatedContent = await axios.put(`http://localhost:3000/api/Contents/${id}`, updatedData);
return updatedContent;
},
deleteContent : async id => {
const deletedContent = await axios.delete(`http://localhost:3000/api/Contents/${id}`);
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
return deletedContent;
},



viewcontent : async()=>{
<<<<<<< HEAD
const getuser = await axios.get('http://localhost:5000/api/Contents/')
return getuser
},
viewcertaincontent : async()=>{
const allContent = await axios.get('http://localhost:5000/api/Contents')
const contId = allContent.data.data[0]._id
const getcertainuser = await axios.get('http://localhost:5000/api/Contents/'+contId)
=======
const getuser = await axios.get('http://localhost:3000/api/Contents/')
return getuser
},
viewcertaincontent : async()=>{
const allContent = await axios.get('http://localhost:3000/api/Contents')
const contId = allContent.data.data[0]._id
const getcertainuser = await axios.get('http://localhost:3000/api/Contents/'+contId)
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
return getcertainuser
},


searchDebatesbycategory: async () => {
<<<<<<< HEAD
             const newDebate=await axios.post('http://localhost:5000/api/Debates',{
=======
             const newDebate=await axios.post('http://localhost:3000/api/Debates',{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
                 title : "smoking",
                 category : "health",
                 date  : "12-21-2001",
                 description : "gdhakvcladbhc",
                 info : "aksnansd;akn"
 


         })
         
<<<<<<< HEAD
         const debate = await axios.get('http://localhost:5000/api/Debates/Search/health')
=======
         const debate = await axios.get('http://localhost:3000/api/Debates/Search/health')
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
         return debate


     },

createFAQs:async () => {
<<<<<<< HEAD
const newFAQ = await axios.post("http://localhost:5000/api/FAQs/add",{
=======
const newFAQ = await axios.post("http://localhost:3000/api/FAQs/add",{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
 question:"how are you ?",
 answer: "meh",
})
return newFAQ
},

updateFAQs:async id =>{

<<<<<<< HEAD
 const updatedFAQ = await axios.put("http://localhost:5000/api/FAQs/edit/"+id,{   //a7ot id mazboot
=======
 const updatedFAQ = await axios.put("http://localhost:3000/api/FAQs/edit/"+id,{   //a7ot id mazboot
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
     question: "what's your name",
     answer:"nouran"
 })
 
 return updatedFAQ
},
searchArticlesByTitle:async id =>{
<<<<<<< HEAD
 const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
=======
 const newArticle = await axios.post("http://localhost:3000/api/Articles/create",{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
     title: "sksl are jdsk",
     description: "dsjk",
     author: "djsk",
     date: "12-21-2001"

})
<<<<<<< HEAD
 const article = await axios.get("http://localhost:5000/api/Articles/Search/are/")   //a7ot id mazboot
 return article
},
searchMotionsByTitle:async id =>{
 const newChatBar = await axios.post("http://localhost:5000/api/Chatbars/create",{
=======
 const article = await axios.get("http://localhost:3000/api/Articles/Search/are/")   //a7ot id mazboot
 return article
},
searchMotionsByTitle:async id =>{
 const newChatBar = await axios.post("http://localhost:3000/api/Chatbars/create",{
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
     debateLiveTitle: "dsjk are djsk",
     date: "12-21-2001"

})
<<<<<<< HEAD
 const chatBar = await axios.get("http://localhost:5000/api/Chatbars/search/are/")   //a7ot id mazboot
=======
 const chatBar = await axios.get("http://localhost:3000/api/Chatbars/search/are/")   //a7ot id mazboot
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
 return chatBar
},
getQuestionsAdmin:async id =>{
 
<<<<<<< HEAD
 const question = await axios.get("http://localhost:5000/api/Questions/admin/")   //a7ot id mazboot
=======
 const question = await axios.get("http://localhost:3000/api/Questions/admin/")   //a7ot id mazboot
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
 return question
},
getQuestions:async id =>{

<<<<<<< HEAD
 const question = await axios.get("http://localhost:5000/api/Questions/allQuestions/admin/")   //a7ot id mazboot
=======
 const question = await axios.get("http://localhost:3000/api/Questions/allQuestions/admin/")   //a7ot id mazboot
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
 return question
},
deleteQuestions: async id=>{
 
<<<<<<< HEAD
 const deletedQuestion = await axios.delete("http://localhost:5000/api/Questions/"+id)  //a7ot id mazboot
=======
 const deletedQuestion = await axios.delete("http://localhost:3000/api/Questions/"+id)  //a7ot id mazboot
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
 return deletedQuestion
},
askQuestion:async id =>{

<<<<<<< HEAD
 const question = await axios.post("http://localhost:5000/api/Questions/ask/",{   //a7ot id mazboot
=======
 const question = await axios.post("http://localhost:3000/api/Questions/ask/",{   //a7ot id mazboot
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
     question: "how are you ?",
     user:"blala"
 })
 
 return question
},
answerQuestion:async id =>{

<<<<<<< HEAD
 const question = await axios.put("http://localhost:5000/api/Questions/answerquestion/"+id,{   //a7ot id mazboot
=======
 const question = await axios.put("http://localhost:3000/api/Questions/answerquestion/"+id,{   //a7ot id mazboot
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
     answer:'nouran'
 })
 
 return question
},
getAnswers:async id =>{

<<<<<<< HEAD
 const answer = await axios.get("http://localhost:5000/api/Questions/user/"+id)   //a7ot id mazboot
=======
 const answer = await axios.get("http://localhost:3000/api/Questions/user/"+id)   //a7ot id mazboot
>>>>>>> c1dd4fade3c42bc9aa34c555f5dfcf33c1a4dc78
 return answer
}

			
}

module.exports = functions;