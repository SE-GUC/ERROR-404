 const axios = require('axios');
 const functions = {
               getFAQs: async () => {
                   const FAQs = await axios.get('http://localhost:3000/api/FAQs/')
                   return FAQs
                   },
                  
                   deleteFAQs: async id=>{
                       
                       const deletedFAQ = await axios.delete("http://localhost:3000/api/FAQs/"+id)  //a7ot id mazboot
                       return deletedFAQ
                   },
                   searchUsersByName: async () => {
                       const newUser=await axios.post('http://localhost:3000/api/Users/register',{
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
                       const user = await axios.get('http://localhost:3000/api/Users/Search/nouran')
                       const id=newUser.data.data._id
                       const deletedUser = await axios.delete("http://localhost:3000/api/Users/"+id)
           
                       return user
           
                       },
           
                       searchUsersByType: async () => {
                           const newUser=await axios.post('http://localhost:3000/api/Users/register',{
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
                       const user = await axios.get('http://localhost:3000/api/Users/Search/alumni')
                       const deletedUser = await axios.delete("http://localhost:3000/api/Users/"+id)
           
                       return user
           
           
                           },
           getFAQById: async id => {
                       const newFAQ = await axios.post("http://localhost:3000/api/FAQs/add",{
                           question:"how are you ?",
                           answer: "meh",
                       })
                       const FAQs = await axios.get('http://localhost:3000/api/FAQs/'+id)
                       return FAQs
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
        
        
                },
        
        createFAQs:async () => {
       const newFAQ = await axios.post("http://localhost:3000/api/FAQs/add",{
            question:"how are you ?",
            answer: "meh",
        })
        return newFAQ
        },
        
        updateFAQs:async id =>{
        
            const updatedFAQ = await axios.put("http://localhost:3000/api/FAQs/edit/"+id,{   //a7ot id mazboot
                question: "what's your name",
                answer:"nouran"
            })
            
            return updatedFAQ
        },
        searchArticlesByTitle:async id =>{
            const newArticle = await axios.post("http://localhost:3000/api/Articles/create",{
                title: "sksl are jdsk",
                description: "dsjk",
                author: "djsk",
                date: "12-21-2001"
        
        })
            const article = await axios.get("http://localhost:3000/api/Articles/Search/are/")   //a7ot id mazboot
            return article
        },
        searchMotionsByTitle:async id =>{
            const newChatBar = await axios.post("http://localhost:3000/api/Chatbars/create",{
                debateLiveTitle: "dsjk are djsk",
                date: "12-21-2001"
        
        })
            const chatBar = await axios.get("http://localhost:3000/api/Chatbars/search/are/")   //a7ot id mazboot
            return chatBar
        },
        getQuestionsAdmin:async id =>{
            
            const question = await axios.get("http://localhost:3000/api/Questions/admin/")   //a7ot id mazboot
            return question
        },
        getQuestions:async id =>{
          
            const question = await axios.get("http://localhost:3000/api/Questions/allQuestions/admin/")   //a7ot id mazboot
            return question
        },
        deleteQuestions: async id=>{
            
            const deletedQuestion = await axios.delete("http://localhost:3000/api/Questions/"+id)  //a7ot id mazboot
            return deletedQuestion
        },
        askQuestion:async id =>{
        
            const question = await axios.post("http://localhost:3000/api/Questions/ask/",{   //a7ot id mazboot
                question: "how are you ?",
                user:"blala"
            })
            
            return question
        },
        answerQuestion:async id =>{
        
            const question = await axios.put("http://localhost:3000/api/Questions/answerquestion/"+id,{   //a7ot id mazboot
                answer:'nouran'
            })
            
            return question
        },
        getAnswers:async id =>{
          
            const answer = await axios.get("http://localhost:3000/api/Questions/user/"+id)   //a7ot id mazboot
            return answer
        },
  }
   module.exports = functions;

