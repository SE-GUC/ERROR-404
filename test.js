const funcs = require('./fn')
const Article = require('./models/Article')
const bcrypt = require('bcrypt')


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



