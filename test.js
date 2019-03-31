const functions = require('./fn');
const content = require('./fn')
const Content = require('./models/User')
const Article = require('./models/Article')

test('get all content ', async() =>{
    const response = await content.viewcontent()
    expect(response.data).toBeDefined()
});
test('get specific content', async() => {
    const response = await content.viewcertaincontent()
    expect(response.data).toBeDefined()
    //done()
    
})

test('Creating new content', async (done) => {
    const allContent = await functions.getAllContent();
    const databaseSize = allContent.data.data.length;
    const content = {type: 'event', description: "nazleen yetkallemo"};
    const newContent = await functions.createContent(content);
    const allContentUpdated = await functions.getAllContent();
    var i;
    var b = false;
    var index = 0;
    for(i = 0; i < allContentUpdated.data.data.length; i++){
        if(allContentUpdated.data.data[i].type === content.type
        && allContentUpdated.data.data[i].description === content.description){
        b = true;

        }
    }
    expect(b).toBeTruthy();
    expect(allContentUpdated.data.data.length).toBe(allContent.data.data.length + 1);
    done();
});

test('Updating existing content', async (done) => {
    const allContent = await functions.getAllContent();
    const id = allContent.data.data[0]._id;
    const updatedData = {description: "a7la mesa 3aleik"};
    const updatedContent = await functions.updateContent(id, updatedData);
    const allContentUpdated = await functions.getAllContent(); 
    expect(allContentUpdated.data.data[0].description).toEqual("a7la mesa 3aleik");
    done();
});

test('Deleting Content' , async(done) => {
    const allContent =  await functions.getAllContent();
    const id = allContent.data.data[0]._id;
    const deletedContent = await functions.deleteContent(id);
    const allContentUpdated = await functions.getAllContent();
    var i;
    var b = true;
    for(i = 0; i < allContentUpdated.data.data.length; i++){
        if(allContentUpdated.data.data[i]._id === id)
        b = false;
    }
    expect(b).toBeTruthy();
    done()
});

test('Getting all clubs', async(done) => {
    const clubs = functions.getAllClubs();
    expect(clubs).toBeDefined;
    done();
})



//Testing that TIQ admins are able to create new users
test("Creates new user ", async(done)=>{

    const result = await funcs.getUsers()
    const resultLenght =result.data.data.length
    const newUser= await funcs.createUser()

    expect(newUser.data.data.type).toEqual("member")
    expect(newUser.data.data.firstName).toEqual("nadda")
    expect(newUser.data.data.lastName).toEqual("kok")
   
    expect(newUser.data.data.birthDate).toEqual("1/1/1990")
    expect(newUser.data.data.bio).toEqual("hey there")
    expect(newUser.data.data.email).toEqual("zoombahanam@student.guc.edu.eg")
    expect(newUser.data.data.house).toEqual("Orion")

    expect(newUser.data.data.clubs).toEqual(["TIQ"])

    const newResult=await funcs.getUsers()

    done();
})







//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------



//updating user if (admiin or user) // so2alllllllllllllllllll
    // Testing that the users are able to update their information probably 
	// Testing that TIQ admins are able to update the information of the users probably 
    test("Update user first and last name", async() => {
        const updUser= await funcs.updateUser()
        expect(updUser.data.data.firstName).toEqual("karkora")
        expect(updUser.data.data.lastName).toEqual("amoraa")
    })



//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

// // Testing that users are able to view certain Articles 
test('testing getting an article', async(done)=> {
    const articles = await funcs.getArticles()
    const firstarticle=articles.data.data[0]
    const firstId=firstarticle._id
    const article = await funcs.getArticleById(firstId)
    expect(article.data.data.title).toEqual(firstarticle.title)
    expect(article.data.data.description).toEqual(firstarticle.description)
    expect(article.data.data.author).toEqual(firstarticle.author)
    expect(article.data.data.date).toEqual(firstarticle.date)
   

    done()
});


//--------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------






// // Testing that users are able to view Articles
test('Number of Articles should be ', async () => {                                 ///doneee
    expect.assertions(1)
    const result =  await funcs.getArticles()
    expect(result).toBeDefined()
});



//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

// //Testing that TIQ admins are able to create new motions on the Debate live
test("creating Motion with name of Engineering", async() =>{                           ///donee
    //check the length  herrre 
    const newMotion = await funcs.createMotion()
    expect(newMotion.data.data.debateLiveTitle).toEqual("Engineering")
    expect(newMotion.data.data.date).toEqual("1/1/2011")

}
)
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//Testing that the number of responses are always updated
test("Number of response updated", async(done) =>{  
    
      const motions = await funcs.getDebateLive()
        const firstMotion=motions.data.data[0]
        const firstId=firstMotion._id
        const newM = await funcs.updateNumberOfResponses(firstId)               
        expect(newM).toEqual(1)
    
        done()
    
    }
    )



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
    // delete Debate live testing
    test("It responds with deleted Debate Live",async() =>{
        const response =  await funcs.getDebateLive()
        const resLength  = response.data.data.length
        const deletedDebateLive = await funcs.deleteDebateLive()
        const responseNew =  await funcs.getDebateLive()
        expect(responseNew.data.data.length).toBe(resLength)
    
    })
    //get Debate Live testing
    test("It responds with all the Debate Lives",async() =>{
        const response =  await funcs.getDebateLive()
        expect(response.data).toBeDefined()
    })

