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
    
        
  }
   module.exports = functions;