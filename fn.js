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
    }
  }
   module.exports = functions; 