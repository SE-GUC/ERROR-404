const user = require('./fn')
const User = require('./models/User')
const content = require('./fn')
const Content = require('./models/User')

// test('get all Users', async () => {
//     const response =  await user.getUsers()
//     expect(response.data).toBeDefined()
//   })
//   test('get specific user',async()=> {
//       const response = await user.getUserByIdFound()
//       expect(response.data).toBeDefined()
//   })
//   test('get specific user failed', async()=> {
//      const response = await user.getUserByIdNotFound()
//      expect(response.data).toEqual("Cannot find the user ")
//   });  
//   test('Delete User', async()=> {
//     const check = (await user.getUsers()).data.data.length
//     const response = await user.deleteUserSuccess()
//     const after = (await user.getUsers()).data.data.length
//     expect(after).toEqual(check)
// });     
//   test('Scores gets updated',async()=>{
     
//       const response = await user.updateUserScore()
//      expect(response.data).toEqual({msg:"Score updated"})
//   });
 
//   test('Delete user failed', async() =>{
//       const before = (await user.getUsers()).data.data.length
//       const response = await user.deleteUserFailed()
//       const after = (await user.getUsers()).data.data.length
//       expect(after).toBe(before)
//   });
  test('get all content ', async() =>{
    const response = await content.viewcontent()
    expect(response.data).toBeDefined()
});
// test('get specific content', async(done) => {
//     const response = await content.viewcertaincontent()
    
//     expect(response.data.data.data).toBeDefined()
//     done()
    
// })

