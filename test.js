const functions = require('./fn');
const funcs = require('./fn');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const content = require('./fn')
const Content = require('./models/User')
const Article = require('./models/Article')
const axios = require('axios');
var cntD = 0


beforeAll(async(done) => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@trail-mflro.mongodb.net/mydb`)
    var db = mongoose.connection;
    await db.dropCollection("debates", function(result,err){
        if(err) console.log("error in dropping debates collection")
        else console.log("debates collection deleted successfully")
    })
    db.close()
    done()
});

afterAll (()=>{
    mongoose.disconnect()
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
test('get all content ', async() =>{
    const response = await content.viewcontent()
    expect(response.data).toBeDefined()
});
test('get specific content', async() => {
    const response = await content.viewcertaincontent()
    expect(response.data).toBeDefined()
    //done()
    
})



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
        const allusers = await functions.getUsers()
        const updateUser = {firstName:"Karkora" ,lastName:"Amora" };
        const id = allusers.data.data[0]._id;
        console.log(id)
        const updUser= await funcs.updateUser(id,updateUser)
        const allUersAfter=await funcs.getUsers()
        expect(allUersAfter.data.data[0].firstName).toEqual("Karkora")
        expect(allUersAfter.data.data[0].lastName).toEqual("Amora")
    
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
 
//* ********************************************************** */
//* *****************START OF MY TESTS************************** */
//* ********************************************************** */


test('A TIQ user should be able to view all Debates', async (done)=>{
    const debate1 = await funcs.createDebate({title:"Test1" ,category:"Test1" , date :"1-1-2019" ,info :"test1" , description :"test1" })
    const debate2 = await funcs.createDebate({title:"Test2" ,category:"Test2" , date :"2-1-2019" ,info :"test2" , description :"test2" })
    const debate3 = await funcs.createDebate({title:"Test3" ,category:"Test3" , date :"3-1-2019" ,info :"test3" , description :"test3" })
    const debates = await funcs.getDebates()
    expect(Object.keys(debates.data)).not.toEqual(['err'])
    cntD = debates.data.data.length
    expect(cntD).toBe(3)
    expect(debates.data.data[0]).toEqual(debate1.data.data)
    expect(debates.data.data[1]).toEqual(debate2.data.data)
    expect(debates.data.data[2]).toEqual(debate3.data.data)
    done()
})

test('A TIQ admin should not be able to create a Debate with wrong schema', async(done)=>{
    const newDebate = await funcs.createInvalidDebate()
    expect(Object.keys(newDebate.data)).toEqual(['err'])
    const allDebates = await funcs.getDebates()
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)
    done()
    
})

test('A TIQ admin should be able to create a new Debate',async(done)=>{
    const create = {title:"createTestTitle" ,category:"CreateTestcategory" , date :"1-1-2019" ,info :"createTestInfo" , description :"CreateTestDescription" }
    const newDebate = await funcs.createDebate(create)
    cntD ++;
    expect(newDebate.data.data.title).toEqual(create.title)
    expect(newDebate.data.data.category).toEqual(create.category)
    expect(newDebate.data.data.info).toEqual(create.info)
    expect(new Date(newDebate.data.data.date)).toEqual(new Date(create.date))
    expect(newDebate.data.data.description).toEqual(create.description)
    const allDebates = await funcs.getDebates()
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)
    done()
})

test('A TIQ user should be able to view a certian debate', async(done)=>{
    const create = {title:"viewbyIDTestTitle" ,category:"viewbyIDTestcategory" , date :"1-1-2019" ,info :"viewbyIDTestInfo" , description :"viewbyIDTestDescription" }
    const newDebate = await funcs.createDebate(create)
    cntD ++
    const Debate = await funcs.getDebateById(newDebate.data.data._id)
    expect(Object.keys(Debate.data)).not.toEqual(['err'])
    expect(Debate.data.data).toEqual(newDebate.data.data)
    done()
})

test('A TIQ user should not be able to view a non-existing debate', async(done)=>{
    const Debate = await funcs.getDebateById(-1)
    expect(Object.keys(Debate.data)).toEqual(['err'])    
    done()
})

test('A TIQ admin should not be able to update an existing debate with a wrong schema' , async(done)=>{
    const create = {title:"InvalidUpdateTestTitle" ,category:"InvalidUpdateTestcategory" , date :"1-1-2019" ,info :"InvalidUpdateTestInfo" , description :"InvalidUpdateTestDescription" }
    const newDebate = await funcs.createDebate(create)
    cntD++
    const updateresponse = await funcs.updateInvalidDebate(newDebate.data.data._id)
    expect(Object.keys(updateresponse.data)).toEqual(['err'])
    const debateafterupdate = await funcs.getDebateById(newDebate.data.data._id)
    expect(debateafterupdate.data.data).toEqual(newDebate.data.data)
    done()
})


test('A TIQ admin should be able to update an existing debate' , async(done)=>{
    const create = {title:"UpdateTestTitle" ,category:"UpdateTestcategory" , date :"1-1-2019" ,info :"UpdateTestInfo" , description :"UpdateTestDescription" }
    const newDebate = await funcs.createDebate(create)
    cntD++
    const id = newDebate.data.data._id
    const update = {title:"AfterUpdateTestTitle" ,category:"AfterUpdateTestcategory" , date :"1-1-2019" ,info :"AfterUpdateTestInfo" , description :"AfterUpdateTestDescription" }
    const updateresponse = await funcs.updateDebate(id,update)
    expect(Object.keys(updateresponse.data)).not.toEqual(['err'])
    const debateafterupdate = await funcs.getDebateById(id)
    expect(debateafterupdate.data.data.title).toEqual(update.title)
    expect(debateafterupdate.data.data.category).toEqual(update.category)
    expect(debateafterupdate.data.data.info).toEqual(update.info)
    expect(debateafterupdate.data.data.description).toEqual(update.description)
    expect(new Date(debateafterupdate.data.data.date)).toEqual(new Date(update.date))
    done()
})


test('A TIQ admin should not be able to delete a non-existing debate' , async(done)=>{
    const deleteresponse = await funcs.deleteDebate(-1)
    expect(Object.keys(deleteresponse.data)).toEqual(['err'])
    const allDebates = await funcs.getDebates()
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)
    done()

})

test('A TIQ admin should be able to delete an existing debate' , async(done)=>{
    const create = {title:"DeleteTestTitle" ,category:"DeleteTestcategory" , date :"1-1-2019" ,info :"DeleteTestInfo" , description :"DeleteTestDescription" }
    const newDebate = await funcs.createDebate(create)
    cntD++
    const id = newDebate.data.data._id;
    const deleteresponse = await funcs.deleteDebate(id)
    expect(Object.keys(deleteresponse.data)).not.toEqual(['err'])
    cntD --;
    const getAfterDelete = await funcs.getDebateById(id)
    expect(getAfterDelete.data.data).toEqual(null)
    const allDebates = await funcs.getDebates()
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)
    done()
})

//* ********************************************************** */
//* *****************END OF MY TESTS************************** */
//* ********************************************************** */

//Testing search for debates by date 
    test("It responds with the searched debate by date", async (done) => {
        
        const debate =  await funcs.searchDebatesbydate()
        var i;
        var b=true;
        const testDate = '2001-12-20T22:00:00.000Z'
        for(i=0;i<debate.data.data.length;i++){
            if(debate.data.data[i].date!==testDate){
                b=false
            }
        }
        expect(b).toBeTruthy()
        done()
    })
     //Testing search for debates by category 
     test("It responds with the searched debate by category", async (done) => {
        const debate =  await funcs.searchDebatesbycategory()
        var i;
        var b=true;
        for(i=0;i<debate.data.data.length;i++){
            if(debate.data.data[i].category!=="health"){
                b=false
            }
        }
       
        expect(b).toBeTruthy()
        done()
    })
    test('Getting club by id', async (done) => {
        const allClubs = await functions.getAllClubs();
        const firstClub = allClubs.data.data[0];
        const club = await functions.getClubById(firstClub._id);
        expect(club.data.data.name).toEqual(firstClub.name);
        expect(club.data.data.description).toEqual(firstClub.description);
        done()
    });
    
    test('Creating a new club adds it to the database', async (done) => {
        const allClubs = await functions.getAllClubs();
        const databaseSize = allClubs.data.data.length;
        const club = {name: "Nebny", description: "mesh charity bas ya3nii"};
        const newClub = await functions.createClub(club);
        const allClubsUpdated = await functions.getAllClubs();
        var i;
        var b = false;
        for(i = 0; i < allClubsUpdated.data.data.length; i++){
            if(allClubsUpdated.data.data[i].name === club.name && allClubsUpdated.data.data[i].description === club.description)
            b = true;
        }
        expect(b).toBeTruthy();
        expect(allClubsUpdated.data.data.length).toBe(allClubs.data.data.length + 1);
        done();
    });
    
    test('Updating an existing club', async (done) => {
        const allClubs = await functions.getAllClubs();
        const id = allClubs.data.data[0]._id;
        const updatedData = {description: "a7la mesa 3aleik"};
        const updatedClub = await functions.updateClub(id, updatedData);
        const allClubsUpdated = await functions.getAllClubs(); 
        expect(allClubsUpdated.data.data[0].description).toEqual("a7la mesa 3aleik");
        done();
    });
    
    test('Deleting a club', async (done) => {
        const allClubs =  await functions.getAllClubs();
        const id = allClubs.data.data[0]._id;
        const deletedClub = await functions.deleteClub(id);
        const allClubsUpdated = await functions.getAllClubs();
        var i;
        var b = true;
        for(i = 0; i < allClubsUpdated.data.data.length; i++){
            if(allClubsUpdated.data.data[i]._id === id)
            b = false;
        }
        expect(b).toBeTruthy();
        done()
    });
    //test  get FAQ
test("It responds with the FAQs", async (done) => {
    
    const response =  await funcs.getFAQs()
   expect(response.data.data).toBeDefined()
    done()
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
test('get all Users', async () => {                             
    const response =  await funcs.getUsers()
    expect(response.data).toBeDefined()
  })



  test('get specific user',async()=> {
      const response = await funcs.getUserByIdFound()
      expect(response.data).toBeDefined()
  })



  test('get specific user failed', async()=> {
     const response = await funcs.getUserByIdNotFound()
     expect(response.data).toEqual("Cannot find the user ")
  });  


  test('Delete User', async()=> {
    const check = (await funcs.getUsers()).data.data.length
    const response = await funcs.deleteUserSuccess()
    const after = (await funcs.getUsers()).data.data.length
    expect(after).toEqual(check)
});


  test('Scores gets updated',async()=>{
     
      const response = await funcs.updateUserScore()
     expect(response.data).toEqual({msg:"Score updated"})
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
test('get all content ', async() =>{
    const response = await content.viewcontent()
    expect(response.data).toBeDefined()
});
test('get specific content', async() => {
    const response = await content.viewcertaincontent()
    expect(response.data).toBeDefined()
    //done()
    
})



//test  get certain FAQ
test("It responds with the FAQ", async (done) => {
    const response =  await funcs.getFAQs() 
    const FAQ = await funcs.getFAQById(response.data.data[0]._id)
    const faq=FAQ.data.data[0]
    expect(faq._id).toEqual(response.data.data[0]._id)
    done()

})

//     //delete FAQ testing
    test("It responds with the deleted FAQ",async(done) =>{
        const response =  await funcs.getFAQs()
        const resLength  = response.data.data.length
        const deletedFAQ = await funcs.deleteFAQs(response.data.data[0]._id)
        const response1 =  await funcs.getFAQs()
        var i;
        var b=true;
        for(i=0;i<response1.data.data.length;i++){
        if(response1.data.data[i]._id===response.data.data[0]._id){
            b=false;
        }
        }
        expect(b).toBeTruthy(); //a7ot el id el mazboot
        
        done()

    })
    //Testing search for users by name 
    test("It responds with the searched user by name", async (done) => {
        
        const user =  await funcs.searchUsersByName()
        var i;
        var b=true;
        for(i=0;i<user.data.data.length;i++){
            if(user.data.data[i].firstName!=="nouran" && user.data.data[i].lastName!=="nouran"){
                b=false
            }
        }
       
        expect(b).toBeTruthy()
        done()
    })
     



     //Testing search for users by type 
     test("It responds with the searched user by type", async (done) => {
        const user =  await funcs.searchUsersByType()
        var i;
        var b=true;
        for(i=0;i<user.data.data.length;i++){
            if(user.data.data[i].type!=="alumni"){
                b=false
            }
        }
       
        expect(b).toBeTruthy()
        done()
    })


 //test create new FAQ
    test("It responds with the newly created FAQ", async (done) => {
        const response =  await funcs.getFAQs()
        const resLength  = response.data.data.length
        const newFAQ = await funcs.createFAQs()
        expect(newFAQ.data.data.question).toEqual("how are you ?")
        expect(newFAQ.data.data.answer).toEqual("meh")
        const responseNew =  await funcs.getFAQs()
        expect(responseNew.data.data.length).toBe(resLength+1)
        done()

    })
// //     //update FAQ testing
    test("It responds with an updated FAQ", async (done) => {
        const newFAQ = await funcs.createFAQs()
        const response =  await funcs.getFAQs() 
        const updatedFAQ = await funcs.updateFAQs(response.data.data[0]._id)
        const response1 =  await funcs.getFAQs() 
        const newFAQ1 = response1.data.data[0]
        expect(newFAQ1.answer).toEqual("nouran")
        expect(newFAQ1.question).toEqual("what's your name")
        done()

    })
//Testing search for articles by title 
test("It responds with the searched article by a word in the title", async (done) => {
        
    const article =  await funcs.searchArticlesByTitle()
    var i;
    for(i=0;i<article.data.data.length;i++){
        const art=article.data.data[i].title
        expect(art).toEqual(expect.stringContaining("are"));
       
    }
   
    done()
})
    
//Testing search for motions in debate live  by title 
test("It responds with the searched motion by a word in the title", async (done) => {
        
    const motion =  await funcs.searchMotionsByTitle()
    var i;
    for(i=0;i<motion.data.data.length;i++){
        const art=motion.data.data[i].debateLiveTitle
        expect(art).toEqual(expect.stringContaining("are"));
       
    }
   
    done()
})
//test  get admin unanswered questions
test("It responds with the unanswered questions", async (done) => {
    const newQuestion = await axios.post("http://localhost:3000/api/Questions/ask",{
                question: "dsjk are djsk",
                user: "dskjflkdf"
        
        })
    const response =  await funcs.getQuestionsAdmin()
    var i;
    for(i=0;i<response.data.data.length;i++){
        expect(response.data.data[i].answer).toBeUndefined();
    }
    done()

})
//test  get allquestions by admin 

test("It responds with the questions", async (done) => {
    
    const response =  await funcs.getQuestions()
   expect(response.data.data).toBeDefined()
    done()


})
     //delete Question testing
test("It responds with the deleted Question",async(done) =>{
    const newQuestion = await axios.post("http://localhost:3000/api/Questions/ask",{
                question: "dsjk are djsk",
                user: "dskjflkdf"
        
        })
    const response =  await funcs.getQuestions()
    const deletedQuestion = await funcs.deleteQuestions(response.data.data[0]._id)
    const response1 =  await funcs.getQuestions()
    var i;
    var b=true;
    for(i=0;i<response1.data.data.length;i++){
        if(response1.data.data[i]._id===response.data.data[0]._id){
            b=false;
        }
    }
    expect(b).toBeTruthy(); //a7ot el id el mazboot
    
    done()

})

  //asking question testing
  test("It responds with the newly asked question", async (done) => {
            const response =  await funcs.getQuestionsAdmin()
            const resLength  = response.data.data.length
            const newQuestion = await funcs.askQuestion()
            expect(newQuestion.data.data.question).toEqual("how are you ?")
            expect(newQuestion.data.data.user).toEqual("blala")
            const responseNew =  await funcs.getQuestionsAdmin()

            expect(responseNew.data.data.length).toBe(resLength+1)
            done()
    
        })



//     //answer question testing
    test("It responds with the answered question", async (done) => {
        const newQuestion = await funcs.askQuestion()
        const response =  await funcs.getQuestionsAdmin() 
        const answeredQuestion = await funcs.answerQuestion(response.data.data[0]._id)
        const response1 =  await funcs.getQuestions() 
        const newQuestion1 = response1.data.data[0]
        expect(newQuestion1.answer).toEqual("nouran")
        expect(newQuestion1._id).toEqual(response.data.data[0]._id)

        done()

    })


//test  get the user's answers of his questions
test("It responds with the answered questions", async (done) => {
    const newQuestion = await axios.post("http://localhost:3000/api/Questions/ask",{
                question: "dsjk are djsk",
                user: "dskjflkdf"
        
        })
    const answeredQuestion = await funcs.answerQuestion(newQuestion.data.data._id)
    const response =  await funcs.getAnswers()
    var i;
    for(i=0;i<response.data.data.length;i++){
        expect(response.data.data[i].user).toEqual("dskjflkdf");
    }
    done()

})


    test('Getting club by id', async (done) => {
        const allClubs = await functions.getAllClubs();
        const firstClub = allClubs.data.data[0];
        const club = await functions.getClubById(firstClub._id);
        expect(club.data.data.name).toEqual(firstClub.name);
        expect(club.data.data.description).toEqual(firstClub.description);
        done()
    });
    
    test('Creating a new club adds it to the database', async (done) => {
        const allClubs = await functions.getAllClubs();
        const databaseSize = allClubs.data.data.length;
        const club = {name: "Nebny", description: "mesh charity bas ya3nii"};
        const newClub = await functions.createClub(club);
        const allClubsUpdated = await functions.getAllClubs();
        var i;
        var b = false;
        for(i = 0; i < allClubsUpdated.data.data.length; i++){
            if(allClubsUpdated.data.data[i].name === club.name && allClubsUpdated.data.data[i].description === club.description)
            b = true;
        }
        expect(b).toBeTruthy();
        expect(allClubsUpdated.data.data.length).toBe(allClubs.data.data.length + 1);
        done();
    });
    
    test('Updating an existing club', async (done) => {
        const allClubs = await functions.getAllClubs();
        const id = allClubs.data.data[0]._id;
        const updatedData = {description: "a7la mesa 3aleik"};
        const updatedClub = await functions.updateClub(id, updatedData);
        const allClubsUpdated = await functions.getAllClubs(); 
        expect(allClubsUpdated.data.data[0].description).toEqual("a7la mesa 3aleik");
        done();
    });
    
    test('Deleting a club', async (done) => {
        const allClubs =  await functions.getAllClubs();
        const id = allClubs.data.data[0]._id;
        const deletedClub = await functions.deleteClub(id);
        const allClubsUpdated = await functions.getAllClubs();
        var i;
        var b = true;
        for(i = 0; i < allClubsUpdated.data.data.length; i++){
            if(allClubsUpdated.data.data[i]._id === id)
            b = false;
        }
        expect(b).toBeTruthy();
        done()
    });