const funcs = require('./fn')

//create Article testing
    test("It responds with the newly created Article", async () => {
        const response =  await funcs.getArticles()
        const resLength  = response.data.data.length
        const newArticle = await funcs.createArticles()
        expect(newArticle.data.data.title).toEqual("The downfall of global capitalism.")
        expect(newArticle.data.data.description).toEqual("This article discuss downfall of global capitalism.")
        expect(newArticle.data.data.author).toEqual("BOAs")
        expect(newArticle.data.data.date).toEqual("25-3-2019")
        const responseNew =  await funcs.getArticles()
        expect(responseNew.data.data.length).toBe(resLength+1)
    
    })
    //update Article testing
    test("It responds with an updated article", async () => {
        const updatedArticle = await funcs.updateArticles()
       
        expect(updatedArticle.data.data.description).toEqual("Is the downfall of global capitalism real, read the article to find out")
    })
    //delete article testing
    test("It responds with deleted article",async() =>{
        const response =  await funcs.getArticles()
        const resLength  = response.data.data.length
        const deletedArticle = await funcs.deleteArticles()
        const responseNew =  await funcs.getArticles()
        expect(responseNew.data.data.length).toBe(resLength)
    })
    //delete Debate live testing
    // test("It responds with deleted Debate Live",async() =>{
    //     const response =  await funcs.getDebateLive()
    //     const resLength  = response.data.data.length
    //     const deletedDebateLive = await funcs.deleteDebateLive()
    //     const responseNew =  await funcs.getDebateLive()
    //     expect(responseNew.data.data.length).toBe(resLength)
    // })
    //get Debate Live testing
    test("It responds with all the Debate Lives",async() =>{
        const response =  await funcs.getArticles()
        expect(response.data).toBeDefined()
    })

