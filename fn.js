const axios = require('axios');
const functions = {
    getFAQs: async () => {
        const FAQs = await axios.get('http://localhost:3000/api/FAQs/')
        return FAQs
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
        }
        
        
  }
   module.exports = functions;