const user = require('./fn')
const User = require('./models/User')
const Articles = require('./models/Article')




test('get all Users', async () => {                             
    const response =  await user.getUsers()
    expect(response.data).toBeDefined()
  })



  test('get specific user',async()=> {
      const response = await user.getUserByIdFound()
      expect(response.data).toBeDefined()
  })



  test('get specific user failed', async()=> {
     const response = await user.getUserByIdNotFound()
     expect(response.data).toEqual("Cannot find the user ")
  });  


  test('Delete User', async()=> {
    const check = (await user.getUsers()).data.data.length
    const response = await user.deleteUserSuccess()
    const after = (await user.getUsers()).data.data.length
    expect(after).toEqual(check)
});


  test('Scores gets updated',async()=>{
     
      const response = await user.updateUserScore()
     expect(response.data).toEqual({msg:"Score updated"})
  });
 

 


