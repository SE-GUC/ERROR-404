const funcs = require('./fn');
const axios = require('axios');
//test  get FAQ
test("It responds with the FAQs", async (done) => {
    
    const response =  await funcs.getFAQs()
   expect(response.data.data).toBeDefined()
    done()

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
    const funcs = require('./fn');
const axios = require('axios');
//test  get FAQ
test("It responds with the FAQs", async (done) => {
    
    const response =  await funcs.getFAQs()
   expect(response.data.data).toBeDefined()
    done()

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