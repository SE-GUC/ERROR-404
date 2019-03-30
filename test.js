const funcs = require('./fn');


test('A TIQ user should be able to view all Debates', async ()=>{
    const debates = await funcs.getDebates()
    expect(debates.data.data).toEqual([])
})

// test('A TIQ admin should be able to create a new Debate',async(done)=>{
//     const newDebate = await funcs.createDebate()
//     expect(newDebate.data.data.title).toEqual('DebateTest')
//     expect(newDebate.data.data.category).toEqual('Test Category')
//     expect(newDebate.data.data.info).toEqual('Debate Created in the Test')
//     expect(await new Date(newDebate.data.data.date)).toEqual(await new Date('1-1-2019'))
//     expect(newDebate.data.data.description).toEqual('Creating this debate to test')
//     done()
// })

test('A TIQ admin should be able to delete an existing debate' , async()=>{
    const deleteresponse = await funcs.deleteDebate()
    expect(Object.keys(deleteresponse.data)).not.toEqual(['err'])

})