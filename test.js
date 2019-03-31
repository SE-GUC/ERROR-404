const funcs = require('./fn');
const axios = require('axios');


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