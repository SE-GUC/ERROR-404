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
//     //update FAQ testing
    test("It responds with an updated FAQ", async (done) => {
        const response =  await funcs.getFAQs() 
        const updatedFAQ = await funcs.updateFAQs(response.data.data[0]._id)
        const response1 =  await funcs.getFAQs() 
        const newFAQ = response1.data.data[0]
        expect(newFAQ.answer).toEqual("nouran")
        expect(newFAQ.question).toEqual("what's your name")
        done()

    })

    