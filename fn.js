const axios = require('axios');
const functions = {
    getArticles: async () => {
        const Articles = await axios.get('http://localhost:3000/api/Articles/')
        return Articles
        },
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
            const updatedArticle = await axios.put("http://localhost:3000/api/Articles/5c9d0bcf6094cb172c141a3a",{
                description: "Is the downfall of global capitalism real, read the article to find out"
            })
            
            return updatedArticle
        },
        deleteArticles: async()=>{
            const deleteArticle = await axios.delete("http://localhost:3000/api/Articles/5c9d0bcf6094cb172c141a3a")
            return deleteArticle
        },
        getDebateLive: async () => {
            const debateLives = await axios.get('http://localhost:3000/api/Chatbars')
            return debateLives
            },
            deleteDebateLive: async()=>{
                const deleteDebateLive = await axios.delete("http://localhost:3000/api/Chatbars/5c9d0c731c9d440000ff9f24")
                return deleteDebateLive
            }
        
        
  }
   module.exports = functions;