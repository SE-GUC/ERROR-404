<<<<<<< HEAD
const axios = require("axios");
const Article = require("./models/Article");
const Articles = require("./routes/api/Articles");
const User = require("./models/User");
const Users = require("./routes/api/Users");
=======
const axios = require('axios');
const Article = require('./models/Article')
const Articles = require('./routes/api/Articles')
const User = require('./models/User')
const Users = require('./routes/api/Users')
const functions = {
getUsers: async()=>{
        const Users = await axios.get('http://localhost:5000/api/Users')
        return Users
    },
    getUserByIdFound : async()=>{
        const user =  User.findOne()
        const userId = user._id
        const userFound = await axios.get('http://localhost:5000/api/Users/'+userId)
        return userFound
    },
    getAllClubs : async () => {
        const clubs = await axios.get('http://localhost:5000/api/Clubs');
        return clubs;
    },
	 getAllContent : async () => {
        const content = await axios.get('http://localhost:5000/api/Contents');
        return content;
    }
    ,
  
   getAllContent : async () => {
        const content = await axios.get('http://localhost:5000/api/Contents');
        return content;
    }
    ,
   
    createContent : async content => {
        const newContent = await axios.post('http://localhost:5000/api/Contents', content);
        return newContent;
    },
    updateContent : async (id, updatedData) => {
        const updatedContent = await axios.put(`http://localhost:5000/api/Contents/${id}`, updatedData);
        return updatedContent;
    },
    deleteContent : async id => {
        const deletedContent = await axios.delete(`http://localhost:5000/api/Contents/${id}`);
        return deletedContent;
    },


    
 viewcontent : async()=>{
        const getuser = await axios.get('http://localhost:5000/api/Contents/')
        return getuser
    },
    viewcertaincontent : async()=>{
        const allContent = await axios.get('http://localhost:5000/api/Contents')
        const contId = allContent.data.data[0]._id
        const getcertainuser = await axios.get('http://localhost:5000/api/Contents/'+contId)
        return getcertainuser
    },


 //getingg all users
    getUsers: async()=>{
        const users = await axios.get('http://localhost:5000/api/Users')
        return users
        },
    
   //Testing that TIQ admins are able to create new users
    createUser: async() =>{
        const newUser = await axios.post('http://localhost:5000/api/Users/register',{
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
    const deleteU =await axios.delete('http://localhost:5000/api/Users/'+newid)  

    return newUser
    },

>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5

const functions = {
  getUsers: async () => {
    const Users = await axios.get("http://localhost:5000/api/Users");
    return Users;
  },
  getUserByIdFound: async () => {
    const user = User.findOne();
    const userId = user._id;
    const userFound = await axios.get(
      "http://localhost:5000/api/Users/" + userId
    );
    return userFound;
  },
  getAllClubs: async () => {
    const clubs = await axios.get("http://localhost:5000/api/Clubs");
    return clubs;
  },
  getAllContent: async () => {
    const content = await axios.get("http://localhost:5000/api/Contents");
    return content;
  },
  getAllContent: async () => {
    const content = await axios.get("http://localhost:5000/api/Contents");
    return content;
  },
  createContent: async content => {
    const newContent = await axios.post(
      "http://localhost:5000/api/Contents",
      content
    );
    return newContent;
  },
  updateContent: async (id, updatedData) => {
    const updatedContent = await axios.put(
      `http://localhost:5000/api/Contents/${id}`,
      updatedData
    );
    return updatedContent;
  },
  deleteContent: async id => {
    const deletedContent = await axios.delete(
      `http://localhost:5000/api/Contents/${id}`
    );
    return deletedContent;
  },

  viewcontent: async () => {
    const getuser = await axios.get("http://localhost:5000/api/Contents/");
    return getuser;
  },
  viewcertaincontent: async () => {
    const allContent = await axios.get("http://localhost:5000/api/Contents");
    const contId = allContent.data.data[0]._id;
    const getcertainuser = await axios.get(
      "http://localhost:5000/api/Contents/" + contId
    );
    return getcertainuser;
  },

  //-------------------------------------------------------------------
  //------------------------------------------------------------------

  //getingg all users
  getUsers: async () => {
    const users = await axios.get("http://localhost:5000/api/Users");
    return users;
  },

  //------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------
  //Testing that TIQ admins are able to create new users
  createUser: async newU => {
    const newUser = await axios.post(
      "http://localhost:5000/api/Users/register",
      newU
    );

    return newUser;
  },

  //--------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------

  updateUser: async (id, updateUser) => {
    const User = await axios.put(
      "http://localhost:5000/api/Users/" + id,
      updateUser
    );
    return User;
  },

  //--------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------

  deleteUser: async id => {
    const deleteduser = await axios.delete(
      "http://localhost:5000/api/Users/" + id
    );
    return deleteduser;
  },

  //--------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------
  getUserById: async id => {
    const getUser = await axios.get("http://localhost:5000/api/Users/" + id);
    return getUser;
  },

  //--------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------

  // Testing that users are able to view certain Articles with id=1
  getArticleById: async id => {
    const article = await axios.get("http://localhost:5000/api/Articles/" + id);
    return article;
  },
  //--------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------

  //     // Testing that users are able to view Articles
  getArticles: async () => {
    //done
    const articles = await axios.get("http://localhost:5000/api/Articles");
    return articles;
  },

  //--------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------

  //     //Testing that TIQ admins are able to create new motions on the Debate live

  createMotion: async motion => {
    //done
    const newMotion = await axios.post(
      "http://localhost:5000/api/Chatbars/create",
      motion
    );

    return newMotion;
  },

  //--------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------

  getDebateLive: async () => {
    const debateLives = await axios.get("http://localhost:5000/api/Chatbars");
    return debateLives;
  },
  //-------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------

  getDebateLiveByIdFor: async id => {
    const debateLivesFor = await axios.get(
      "http://localhost:5000/api/Chatbars/" + id
    );
    return debateLivesFor;
  },
  //--------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------

  //     //Testing that the number of responses are always updated
  updateNumberOfResponses: async (id, response) => {
    const newO = await axios.put(
      "http://localhost:5000/api/Chatbars/for/" + id,
      {
        forResponses: [response]
      }
    );
    return newO;
  },

  //     getArticles: async () => {
  //         const Articles = await axios.get('http://localhost:5000/api/Articles/')
  //         return Articles
  //         },
  createArticles: async article => {
    const newArticle = await axios.post(
      "http://localhost:5000/api/Articles/create",
      {
        title: article.title,
        description: article.description,
        author: article.author,
        date: article.date
      }
    );
    return newArticle;
  },
  updateArticles: async (id, updatedData) => {
    const updatedArticle = await axios.put(
      "http://localhost:5000/api/Articles/" + id,
      {
        title: updatedData.title,
        description: updatedData.description,
        author: updatedData.author,
        date: updatedData.date
      }
    );

    return updatedArticle;
  },
  deleteArticles: async id => {
    const deleteArticle = await axios.delete(
      "http://localhost:5000/api/Articles/" + id
    );
    return deleteArticle;
  },
  getDebateLive: async () => {
    const debateLives = await axios.get("http://localhost:5000/api/Chatbars/");
    return debateLives;
  },
  getDebateLiveById: async id => {
    const debateLives = await axios.get(
      "http://localhost:5000/api/Chatbars/" + id
    );
    return debateLives;
  },

  deleteDebateLive: async id => {
    const deleteDebateLive = await axios.delete(
      "http://localhost:5000/api/Chatbars/" + id
    );
    return deleteDebateLive;
  },

  getClubById: async id => {
    const club = await axios.get(`http://localhost:5000/api/Clubs/${id}`);
    return club;
  },
  getAllClubs: async () => {
    const clubs = await axios.get("http://localhost:5000/api/Clubs");
    return clubs;
  },
  createClub: async club => {
    const newClub = await axios.post("http://localhost:5000/api/Clubs", club);
    return newClub;
  },
  updateClub: async (id, updatedData) => {
    const updatedClub = await axios.put(
      `http://localhost:5000/api/Clubs/${id}`,
      updatedData
    );
    return updatedClub;
  },
  deleteClub: async id => {
    const deletedClub = await axios.delete(
      `http://localhost:5000/api/Clubs/${id}`
    );
    return deletedClub;
  },
  getDebates: async () => {
    const debates = await axios.get("http://localhost:5000/api/Debates");
    return debates;
  },

  createDebate: async debate => {
    const newDebate = await axios.post("http://localhost:5000/api/Debates", {
      title: debate.title,
      category: debate.category,
      date: debate.date,
      info: debate.info,
      description: debate.description
    });
    return newDebate;
  },
  deleteDebate: async id => {
    const response = await axios.delete(
      `http://localhost:5000/api/Debates/${id}`
    );
    return response;
  },
  updateDebate: async (id, debate) => {
    const response = await axios.put(
      `http://localhost:5000/api/Debates/${id}`,
      {
        title: debate.title,
        category: debate.category,
        date: debate.date,
        info: debate.info,
        description: debate.description
      }
    );
    return response;
  },
  getDebateById: async id => {
    const response = await axios.get(`http://localhost:5000/api/Debates/${id}`);
    return response;
  },
  createInvalidDebate: async () => {
    const newDebate = await axios.post("http://localhost:5000/api/Debates", {
      title: "DebateTest",
      category: "Updated Category",
      info: "Debate Created in the Test",
      description: "Creating this debate to test"
    });
    return newDebate;
  },
  updateInvalidDebate: async id => {
    const response = await axios.put(
      `http://localhost:5000/api/Debates/${id}`,
      {
        title: "D",
        category: "Updated Category",
        date: "1-1-2019",
        info: "Updated by Invalid Schema",
        description: "Updating this debate to test"
      }
    );
    return response;
  },
  getInvalidPage: async () => {
    const response = await axios.get("http://localhost:5000/apv/Debates");
    return response;
  },

  
  

<<<<<<< HEAD
  
  getUsers: async () => {
    const Users = await axios.get("http://localhost:5000/api/Users");
    return Users;
  },

  getUserByIdFound: async () => {
    //const user =  User.findOne()
    const allUsers = await axios.get("http://localhost:5000/api/Users");
    const userId = allUsers.data.data[0]._id;
    const userFound = await axios.get(
      "http://localhost:5000/api/Users/" + userId
    );

    return userFound;
  },

  getUserByIdNotFound: async () => {
    const user = await axios.get("http://localhost:5000/api/Users/1");
    return user;
  },

  updateUserScore: async () => {
    const user = await axios.post("http://localhost:5000/api/Users/register", {
      type: "member",
      firstName: "Nadin ",
      lastName: "7ob 3omry",
      birthDate: "12-11-1998",
      bio: "heheehhe",
      email: "kokkkkk@student.guc.edu.eg",
      password: "boooom1234",
      clubs: ["tiq"],
      house: "pegasus"
    });
    const userId = user.data.data._id;
    const updated = await axios.put(
      "http://localhost:5000/api/Users/" + userId + "/7"
    );
    const deleteCreated = await axios.delete(
      "http://localhost:5000/api/Users/" + userId
    );
    return updated;
  },

  deleteUserSuccess: async () => {
    //const user =  await createUserTesting()
    const user = await axios.post("http://localhost:5000/api/Users/register", {
      type: "member",
      firstName: "Nadin ",
      lastName: "7ob 3omry",
      birthDate: "12-11-1998",
      bio: "heheehhe",
      email: "kaaaaaaaaaaa@student.guc.edu.eg",
      password: "boooom1234",
      clubs: ["tiq"],
      house: "pegasus"
    });
    const userId = user.data.data._id;

    const deleteduser = await axios.delete(
      "http://localhost:5000/api/Users/" + userId
    );
    return deleteduser;
  },
  getAllClubs: async () => {
    const clubs = await axios.get("http://localhost:5000/api/Clubs");
    return clubs;
  },
  getAllContent: async () => {
    const content = await axios.get("http://localhost:5000/api/Contents");
    return content;
  },
  getAllContent: async () => {
    const content = await axios.get("http://localhost:5000/api/Contents");
    return content;
  },
  createContent: async content => {
    const newContent = await axios.post(
      "http://localhost:5000/api/Contents",
      content
    );
    return newContent;
  },
  updateContent: async (id, updatedData) => {
    const updatedContent = await axios.put(
      `http://localhost:5000/api/Contents/${id}`,
      updatedData
    );
    return updatedContent;
  },
  deleteContent: async id => {
    const deletedContent = await axios.delete(
      `http://localhost:5000/api/Contents/${id}`
    );
    return deletedContent;
  },

  viewcontent: async () => {
    const getuser = await axios.get("http://localhost:5000/api/Contents/");
    return getuser;
  },
  viewcertaincontent: async () => {
    const allContent = await axios.get("http://localhost:5000/api/Contents");
    const contId = allContent.data.data[0]._id;
    const getcertainuser = await axios.get(
      "http://localhost:5000/api/Contents/" + contId
    );
    return getcertainuser;
  },
=======
updateUser : async(id,updateUser) =>{   
    const updatedUser = await axios.put(`http://localhost:5000/api/Users/${id}`, updateUser);
    return updatedUser;
 },
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5

  
searchDebatesbycategory: async () => {
  const newDebate=await axios.post('http://localhost:5000/api/Debates',{
      title : "smoking",
      category : "health",
      date  : "12-21-2001",
      description : "gdhakvcladbhc",
      info : "aksnansd;akn"

<<<<<<< HEAD


})
=======
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

   // Testing that users are able to view certain Articles with id=1
    getArticleById :async id =>{

           const article = await axios.get('http://localhost:5000/api/Articles/'+id)
           return article

    },
    //--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//     // Testing that users are able to view Articles
    getArticles: async () => {                                                                 //done
        const articles =await axios.get("http://localhost:5000/api/Articles")
        return articles

    },


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


//     //Testing that TIQ admins are able to create new motions on the Debate live   

    createMotion : async() =>{                                                                  //done
        const motion =await axios.post("http://localhost:5000/api/Chatbars/create", {
        debateLiveTitle:"Engineering",
        date:"1/1/2011"   
        })   

        return motion
    },


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


    getDebateLive: async () => {
        const debateLives = await axios.get('http://localhost:5000/api/Chatbars')
        return debateLives
    },
 

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//     //Testing that the number of responses are always updated
    updateNumberOfResponses :async id =>{
        // const motion =await axios.post("http://localhost:5000/api/Chatbars/create", {
          
        // debateLiveTitle:"athletics",
        // date:"1/1/2019"   
        // }) 

        //const newid = motion.data.data._id
        
        const wantedMotion = await axios.get("http://localhost:5000/api/Chatbars/"+id)
        const oldNoOFResponses = wantedMotion.data.numberOfResponses
        const newO = await axios.put("http://localhost:5000/api/Chatbars/for/"+id,
        {
            forResponses: ["I agree with that.."]
        })
        const newNoOfResponses=newO.data.data.numberOfResponses
        const deleteMotion=await axios.delete("http://localhost:5000/api/Chatbars/"+id)

        return newNoOfResponses - oldNoOFResponses
    },



//     getArticles: async () => {
//         const Articles = await axios.get('http://localhost:5000/api/Articles/')
//         return Articles
//         },
    createArticles:async () => {
       const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
        
            title:"The downfall of global capitalism.",
            description: "This article discuss downfall of global capitalism.",
            author: "BOAs",
            date: "25-3-2019"
        })
        return newArticle
        },
        updateArticles:async() =>{
            const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
        
                title:"The downfall of global capitalism.",
                description: "This article discuss downfall of global capitalism.",
                author: "BOAs",
                date: "25-3-2019"
            })
              const id = newArticle.data.data._id
            const updatedArticle = await axios.put("http://localhost:5000/api/Articles/"+id,{
                description: "Is the downfall of global capitalism real, read the article to find out"
            })
            
            return updatedArticle
        },
        deleteArticles: async()=>{
            const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
        
                title:"The downfall of global capitalism.",
                description: "This article discuss downfall of global capitalism.",
                author: "BOAs",
                date: "25-3-2019"
            })
              const id = newArticle.data.data._id
                    const deleteArticle = await axios.delete("http://localhost:5000/api/Articles/"+id)
                    return deleteArticle
        },
        getDebateLive: async () => {
            const debateLives = await axios.get('http://localhost:5000/api/Chatbars/')
            return debateLives
            },
            deleteDebateLive: async()=>{
                const newDebateLive = await axios.post("http://localhost:5000/api/Chatbars/create",{
        
                    debateLiveTitle:"TH supports the decline of the nations-state's power in an increasingly globalised world.",
                    date: "12-11-2018",
                    
                })
                  const id = newDebateLive.data.data._id
                        const deleteDebateLive= await axios.delete("http://localhost:5000/api/Chatbars/"+id)
                        return deleteDebateLive
            },

			 getClubById : async id => {
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
        return debates
        },

    createDebate: async ()=>{
        const newDebate = await axios.post('http://localhost:5000/api/Debates',{
                title: "DebateTest",
                category : "Test Category",
                date : "1-1-2019",
                info : "Debate Created in the Test",
                description : "Creating this debate to test"
        })
        return newDebate
    },
    deleteDebate: async(id)=>{
        const response = await axios.delete(`http://localhost:5000/api/Debates/${id}`)
        return response
    },
    updateDebate: async(id)=>{
        const response = await axios.put(`http://localhost:5000/api/Debates/${id}`,{
            title: "DebateUpdatedTest",
            category : "Updated Category",
            date : "1-1-2019",
            info : "Debate Created in the Update Test",
            description : "Updating this debate to test"
        })
        return response
    },
    getDebateById: async(id)=>{
        const response = await axios.get(`http://localhost:5000/api/Debates/${id}`)
        return response
    },
    createInvalidDebate: async ()=>{
        const newDebate = await axios.post('http://localhost:5000/api/Debates',{
                title: "DebateTest",
            category : "Updated Category",
                info : "Debate Created in the Test",
                description : "Creating this debate to test"
        })
        return newDebate
    },
    updateInvalidDebate: async(id)=>{
        const response = await axios.put(`http://localhost:5000/api/Debates/${id}`,{
            title: "D",
            category : "Updated Category",
            date : "1-1-2019",
            info : "Updated by Invalid Schema",
            description : "Updating this debate to test"
        })
        return response
    },
    getInvalidPage: async()=>{
        const response = await axios.get('http://localhost:5000/apv/Debates')
        return response
    },
    
    searchDebatesbydate: async () => {
        const newDebate=await axios.post('http://localhost:5000/api/Debates',{
          
            title : "smoking",
            category : "health",
            date  : "12-21-2001",
            description : "gdhakvcladbhc",
            info : "aksnansd;akn"


        })
        const debate = await axios.get('http://localhost:5000/api/Debates/searchbydate/12-21-2001')

        return debate

        },
        searchDebatesbycategory: async () => {
            const newDebate=await axios.post('http://localhost:5000/api/Debates',{
                title : "smoking",
                category : "health",
                date  : "12-21-2001",
                description : "gdhakvcladbhc",
                info : "aksnansd;akn"

        })
        
        const debate = await axios.get('http://localhost:5000/api/Debates/Search/health')
        return debate


    },
    getFAQs: async () => {
        const FAQs = await axios.get('http://localhost:5000/api/FAQs/')
        return FAQs
        },
       
        deleteFAQs: async id=>{
            
            const deletedFAQ = await axios.delete("http://localhost:5000/api/FAQs/"+id)  //a7ot id mazboot
            return deletedFAQ
        },
        searchUsersByName: async () => {
            const newUser=await axios.post('http://localhost:5000/api/Users/register',{
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
            const user = await axios.get('http://localhost:5000/api/Users/Search/nouran')
            const id=newUser.data.data._id
            const deletedUser = await axios.delete("http://localhost:5000/api/Users/"+id)

            return user

            },

            searchUsersByType: async () => {
                const newUser=await axios.post('http://localhost:5000/api/Users/register',{
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
            const user = await axios.get('http://localhost:5000/api/Users/Search/alumni')
            const deletedUser = await axios.delete("http://localhost:5000/api/Users/"+id)
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5

const debate = await axios.get('http://localhost:5000/api/Debates/Search/health')
return debate


<<<<<<< HEAD
},


=======
                },
getFAQById: async id => {
            const newFAQ = await axios.post("http://localhost:5000/api/FAQs/add",{
                question:"how are you ?",
                answer: "meh",
            })
            const FAQs = await axios.get('http://localhost:5000/api/FAQs/'+id)
            return FAQs
            },

getUsers: async()=>{
const Users = await axios.get('http://localhost:5000/api/Users')
return Users
},


getUserByIdFound : async()=>{
//const user =  User.findOne()
const allUsers = await axios.get('http://localhost:5000/api/Users')
const userId = allUsers.data.data[0]._id
const userFound = await axios.get('http://localhost:5000/api/Users/'+userId)
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5


searchArticlesByTitle:async id =>{
const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
title: "sksl are jdsk",
description: "dsjk",
author: "djsk",
date: "12-21-2001"

})
const article = await axios.get("http://localhost:5000/api/Articles/Search/are/")   //a7ot id mazboot
return article
},
searchMotionsByTitle:async id =>{
const newChatBar = await axios.post("http://localhost:5000/api/Chatbars/create",{
debateLiveTitle: "dsjk are djsk",
date: "12-21-2001"

<<<<<<< HEAD
})
const chatBar = await axios.get("http://localhost:5000/api/Chatbars/search/are/")   //a7ot id mazboot
return chatBar
=======
getUserByIdNotFound : async()=>{
const user = await axios.get('http://localhost:5000/api/Users/1')
return user

>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5
},
getQuestionsAdmin:async id =>{

<<<<<<< HEAD
const question = await axios.get("http://localhost:5000/api/Questions/admin/")   //a7ot id mazboot
return question
=======
updateUserScore : async() =>{
const user = await axios.post('http://localhost:5000/api/Users/register',{
 
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
const updated = await axios.put('http://localhost:5000/api/Users/'+userId+'/7')
const deleteCreated = await axios.delete('http://localhost:5000/api/Users/'+userId)
return updated
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5
},
getQuestions:async id =>{

const question = await axios.get("http://localhost:5000/api/Questions/allQuestions/admin/")   //a7ot id mazboot
return question
},
getQById: async id => {

const Q = await axios.get('http://localhost:5000/api/Questions/'+id)
return Q
},
deleteQuestions: async id=>{

const deletedQuestion = await axios.delete("http://localhost:5000/api/Questions/"+id)  //a7ot id mazboot
return deletedQuestion
},
askQuestion:async id =>{

<<<<<<< HEAD
const question = await axios.post("http://localhost:5000/api/Questions/ask/",{   //a7ot id mazboot
question: "how are you ?",
user:"blala"
=======
deleteUserSuccess : async()=>{
//const user =  await createUserTesting()
const user = await axios.post('http://localhost:5000/api/Users/register',{
 
 type:"member",
 firstName:"Nadin ",
 lastName:"7ob 3omry",
 birthDate:"12-11-1998",
 bio:"heheehhe",
 email:"kaaaaaaaaaaa@student.guc.edu.eg",
 password:"boooom1234",
 clubs:["tiq"],
 house:"pegasus"
 
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5
})

<<<<<<< HEAD
return question
},
answerQuestion:async id =>{
const question = await axios.put("http://localhost:5000/api/Questions/answerquestion/"+id,{   //a7ot id mazboot
answer:"nouran"
})
return question
=======
const deleteduser = await axios.delete('http://localhost:5000/api/Users/'+userId)
return deleteduser
},
getAllClubs : async () => {
const clubs = await axios.get('http://localhost:5000/api/Clubs');
return clubs;
},
getAllContent : async () => {
const content = await axios.get('http://localhost:5000/api/Contents');
return content;
}
,

getAllContent : async () => {
const content = await axios.get('http://localhost:5000/api/Contents');
return content;
}
,

createContent : async content => {
const newContent = await axios.post('http://localhost:5000/api/Contents', content);
return newContent;
},
updateContent : async (id, updatedData) => {
const updatedContent = await axios.put(`http://localhost:5000/api/Contents/${id}`, updatedData);
return updatedContent;
},
deleteContent : async id => {
const deletedContent = await axios.delete(`http://localhost:5000/api/Contents/${id}`);
return deletedContent;
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5
},
getAnswers:async id =>{

<<<<<<< HEAD
const answer = await axios.get("http://localhost:5000/api/Questions/user/"+id)   //a7ot id mazboot
return answer
},


getFAQs: async () => {
const FAQs = await axios.get('http://localhost:5000/api/FAQs/')
return FAQs
},
=======


viewcontent : async()=>{
const getuser = await axios.get('http://localhost:5000/api/Contents/')
return getuser
},
viewcertaincontent : async()=>{
const allContent = await axios.get('http://localhost:5000/api/Contents')
const contId = allContent.data.data[0]._id
const getcertainuser = await axios.get('http://localhost:5000/api/Contents/'+contId)
return getcertainuser
},


searchDebatesbycategory: async () => {
             const newDebate=await axios.post('http://localhost:5000/api/Debates',{
                 title : "smoking",
                 category : "health",
                 date  : "12-21-2001",
                 description : "gdhakvcladbhc",
                 info : "aksnansd;akn"
 


         })
         
         const debate = await axios.get('http://localhost:5000/api/Debates/Search/health')
         return debate
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5

deleteFAQs: async id=>{

const deletedFAQ = await axios.delete("http://localhost:5000/api/FAQs/"+id)  //a7ot id mazboot
return deletedFAQ
},
getFAQById: async id => {

const FAQs = await axios.get('http://localhost:5000/api/FAQs/'+id)
return FAQs
},
createFAQs:async () => {
const newFAQ = await axios.post("http://localhost:5000/api/FAQs/add",{
 question:"how are you ?",
 answer: "meh",
})
return newFAQ
},
updateFAQs:async id =>{
const updatedFAQ = await axios.put("http://localhost:5000/api/FAQs/edit/"+id,{   //a7ot id mazboot
question: "what's your name",
answer:"nouran"
})
return updatedFAQ
}	,
searchUsersByName: async () => {
const newUser=await axios.post('http://localhost:5000/api/Users/register',{
 type:"alumni",
 firstName:"nouran",
 lastName:"KAMAAAAAAAL",
 birthDate: "12-21-2001",
 bio:"heeee",
 email: "no2no2aaa@student.guc.edu.eg",
 password: "jdknnuuniik",
 clubs:["scs"],
 house:"Pegasus",
 din:"1/1/2010",
 dor:"3/4/2013"

<<<<<<< HEAD

})
const user = await axios.get('http://localhost:5000/api/Users/Search/nouran')
const id=newUser.data.data._id
const deletedUser = await axios.delete("http://localhost:5000/api/Users/"+id)

return user

},
=======
 const updatedFAQ = await axios.put("http://localhost:5000/api/FAQs/edit/"+id,{   //a7ot id mazboot
     question: "what's your name",
     answer:"nouran"
 })
 
 return updatedFAQ
},
searchArticlesByTitle:async id =>{
 const newArticle = await axios.post("http://localhost:5000/api/Articles/create",{
     title: "sksl are jdsk",
     description: "dsjk",
     author: "djsk",
     date: "12-21-2001"

})
 const article = await axios.get("http://localhost:5000/api/Articles/Search/are/")   //a7ot id mazboot
 return article
},
searchMotionsByTitle:async id =>{
 const newChatBar = await axios.post("http://localhost:5000/api/Chatbars/create",{
     debateLiveTitle: "dsjk are djsk",
     date: "12-21-2001"
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5

searchUsersByType: async () => {
 const newUser=await axios.post('http://localhost:5000/api/Users/register',{
 type:"alumni",
 firstName:"nouran",
 lastName:"KAMAAAAAAAL",
 birthDate: "12-21-2001",
 bio:"heeee",
 email: "no2no2aaa@student.guc.edu.eg",
 password: "jdknnuuniik",
 clubs:["scs"],
 house:"Pegasus",
 din:"1/1/2010",
 dor:"3/4/2013"
})
<<<<<<< HEAD
const id=newUser.data.data._id
const user = await axios.get('http://localhost:5000/api/Users/Search/alumni')
const deletedUser = await axios.delete("http://localhost:5000/api/Users/"+id)
return user
=======
 const chatBar = await axios.get("http://localhost:5000/api/Chatbars/search/are/")   //a7ot id mazboot
 return chatBar
},
getQuestionsAdmin:async id =>{
 
 const question = await axios.get("http://localhost:5000/api/Questions/admin/")   //a7ot id mazboot
 return question
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5
},
searchDebatesbydate: async () => {
  const newDebate=await axios.post('http://localhost:5000/api/Debates',{
    
      title : "smoking",
      category : "health",
      date  : "12-21-2001",
      description : "gdhakvcladbhc",
      info : "aksnansd;akn"

<<<<<<< HEAD

  })
  const debate = await axios.get('http://localhost:5000/api/Debates/searchbydate/12-21-2001')

  return debate

  },

=======
 const question = await axios.get("http://localhost:5000/api/Questions/allQuestions/admin/")   //a7ot id mazboot
 return question
},
deleteQuestions: async id=>{
 
 const deletedQuestion = await axios.delete("http://localhost:5000/api/Questions/"+id)  //a7ot id mazboot
 return deletedQuestion
},
askQuestion:async id =>{

 const question = await axios.post("http://localhost:5000/api/Questions/ask/",{   //a7ot id mazboot
     question: "how are you ?",
     user:"blala"
 })
 
 return question
},
answerQuestion:async id =>{

 const question = await axios.put("http://localhost:5000/api/Questions/answerquestion/"+id,{   //a7ot id mazboot
     answer:'nouran'
 })
 
 return question
},
getAnswers:async id =>{

 const answer = await axios.get("http://localhost:5000/api/Questions/user/"+id)   //a7ot id mazboot
 return answer
}
>>>>>>> 39012679cfe912533e154c43e185e3acfa63f1f5

  };

module.exports = functions;