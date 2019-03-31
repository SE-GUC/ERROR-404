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
        
        
                }
        
                   
                   
             }
              module.exports = functions; 
           