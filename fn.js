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
	 getAllContent : async () => {
        const content = await axios.get('http://localhost:3000/api/Contents');
        return content;
    }
    ,
  
   getAllContent : async () => {
        const content = await axios.get('http://localhost:3000/api/Contents');
        return content;
    }
    ,
   
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


    
 viewcontent : async()=>{
        const getuser = await axios.get('http://localhost:3000/api/Contents/')
        return getuser
    },
    viewcertaincontent : async()=>{
        const allContent = await axios.get('http://localhost:3000/api/Contents')
        const contId = allContent.data.data[0]._id
        const getcertainuser = await axios.get('http://localhost:3000/api/Contents/'+contId)
        return getcertainuser
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
            },
			 getClubById : async id => {
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
        return debates
        },

    createDebate: async ()=>{
        const newDebate = await axios.post('http://localhost:3000/api/Debates',{
                title: "DebateTest",
                category : "Test Category",
                date : "1-1-2019",
                info : "Debate Created in the Test",
                description : "Creating this debate to test"
        })
        return newDebate
    },
    deleteDebate: async(id)=>{
        const response = await axios.delete(`http://localhost:3000/api/Debates/${id}`)
        return response
    },
    updateDebate: async(id)=>{
        const response = await axios.put(`http://localhost:3000/api/Debates/${id}`,{
            title: "DebateUpdatedTest",
            category : "Updated Category",
            date : "1-1-2019",
            info : "Debate Created in the Update Test",
            description : "Updating this debate to test"
        })
        return response
    },
    getDebateById: async(id)=>{
        const response = await axios.get(`http://localhost:3000/api/Debates/${id}`)
        return response
    },
    createInvalidDebate: async ()=>{
        const newDebate = await axios.post('http://localhost:3000/api/Debates',{
                title: "DebateTest",
            category : "Updated Category",
                info : "Debate Created in the Test",
                description : "Creating this debate to test"
        })
        return newDebate
    },
    updateInvalidDebate: async(id)=>{
        const response = await axios.put(`http://localhost:3000/api/Debates/${id}`,{
            title: "D",
            category : "Updated Category",
            date : "1-1-2019",
            info : "Updated by Invalid Schema",
            description : "Updating this debate to test"
        })
        return response
    },
    getInvalidPage: async()=>{
        const response = await axios.get('http://localhost:3000/apv/Debates')
        return response
    },
    
    searchDebatesbydate: async () => {
        const newDebate=await axios.post('http://localhost:3000/api/Debates',{
          
            title : "smoking",
            category : "health",
            date  : "12-21-2001",
            description : "gdhakvcladbhc",
            info : "aksnansd;akn"


        })
        const debate = await axios.get('http://localhost:3000/api/Debates/searchbydate/12-21-2001')

        return debate

        },
        searchDebatesbycategory: async () => {
            const newDebate=await axios.post('http://localhost:3000/api/Debates',{
                title : "smoking",
                category : "health",
                date  : "12-21-2001",
                description : "gdhakvcladbhc",
                info : "aksnansd;akn"

        })
        
        const debate = await axios.get('http://localhost:3000/api/Debates/Search/health')
        return debate


    }

			
}

module.exports = functions;
