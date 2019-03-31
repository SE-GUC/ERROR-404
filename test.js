const user = require('./fn')
const User = require('./models/User')
const content = require('./fn')
const Content = require('./models/User')


  test('get all content ', async() =>{
    const response = await content.viewcontent()
    expect(response.data).toBeDefined()
});
test('get specific content', async() => {
    const response = await content.viewcertaincontent()
    expect(response.data).toBeDefined()
    //done()
    
})

