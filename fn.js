const axios = require('axios');

const functions = {
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