const funcs = require('./fn');
var id  =-1
var cntD = 0

test('A TIQ user should be able to view all Debates', async ()=>{
    const debates = await funcs.getDebates()
    expect(Object.keys(debates.data)).not.toEqual(['err'])
    cntD = debates.data.data.length
})

test('A TIQ admin should be able to create a new Debate',async(done)=>{
    const newDebate = await funcs.createDebate()
    expect(newDebate.data.data.title).toEqual('DebateTest')
    expect(newDebate.data.data.category).toEqual('Test Category')
    expect(newDebate.data.data.info).toEqual('Debate Created in the Test')
    expect(await new Date(newDebate.data.data.date)).toEqual(await new Date('1-1-2019'))
    expect(newDebate.data.data.description).toEqual('Creating this debate to test')
    const allDebates = await funcs.getDebates()
    cntD ++;
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)
    id = newDebate.data.data._id
    done()
})

test('A TIQ user should be able to view a certian debate', async()=>{
    const Debate = await funcs.getDebateById(id)
    expect(Debate.data.data.title).toEqual('DebateTest')
    expect(Debate.data.data.category).toEqual('Test Category')
    expect(Debate.data.data.info).toEqual('Debate Created in the Test')
    expect(await new Date(Debate.data.data.date)).toEqual(await new Date('1-1-2019'))
    expect(Debate.data.data.description).toEqual('Creating this debate to test')
    
})

test('A TIQ admin should be able to update an existing debate' , async()=>{
    const updateresponse = await funcs.updateDebate(id)
    expect(Object.keys(updateresponse.data)).toEqual(['data'])
    const debates = await funcs.getDebates()
    const lastinserted = debates.data.data.pop()
    expect(lastinserted.title).toEqual('DebateUpdatedTest')
    expect(lastinserted.category).toEqual('Updated Category')
    expect(lastinserted.info).toEqual('Debate Created in the Update Test')
    expect(await new Date(lastinserted.date)).toEqual(await new Date('1-1-2019'))
    expect(lastinserted.description).toEqual('Updating this debate to test')
    const allDebates = await funcs.getDebates()
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)
})



test('A TIQ admin should be able to delete an existing debate' , async()=>{
    const deleteresponse = await funcs.deleteDebate(id)
    expect(Object.keys(deleteresponse.data)).not.toEqual(['err'])
    const allDebates = await funcs.getDebates()
    cntD --;
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)

})

