const funcs = require('./fn');
var idD  =-1
var cntD = 0

test('A TIQ user should be able to view all Debates', async (done)=>{
    const debates = await funcs.getDebates()
    expect(Object.keys(debates.data)).not.toEqual(['err'])
    cntD = debates.data.data.length
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
    idD = newDebate.data.data._id
    done()
})

test('A TIQ user should be able to view a certian debate', async(done)=>{
    const Debate = await funcs.getDebateById(idD)
    expect(Debate.data.data.title).toEqual('DebateTest')
    expect(Debate.data.data.category).toEqual('Test Category')
    expect(Debate.data.data.info).toEqual('Debate Created in the Test')
    expect(await new Date(Debate.data.data.date)).toEqual(await new Date('1-1-2019'))
    expect(Debate.data.data.description).toEqual('Creating this debate to test')
    done()
})

test('A TIQ user should not be able to view a non-existing debate', async(done)=>{
    const Debate = await funcs.getDebateById(-1)
    expect(Object.keys(Debate.data)).toEqual(['err'])    
    done()
})

test('A TIQ admin should not be able to update an existing debate with a wrong schema' , async(done)=>{
    const updateresponse = await funcs.updateInvalidDebate(idD)
    expect(Object.keys(updateresponse.data)).toEqual(['err'])
    const debates = await funcs.getDebates()
    const lastinserted = await funcs.getDebateById(idD)
    expect(lastinserted.data.data.title).toEqual('DebateTest')
    expect(lastinserted.data.data.category).toEqual('Test Category')
    expect(lastinserted.data.data.info).toEqual('Debate Created in the Test')
    expect(await new Date(lastinserted.data.data.date)).toEqual(await new Date('1-1-2019'))
    expect(lastinserted.data.data.description).toEqual('Creating this debate to test')
    done()
})


test('A TIQ admin should be able to update an existing debate' , async(done)=>{
    const updateresponse = await funcs.updateDebate(idD)
    expect(Object.keys(updateresponse.data)).toEqual(['data'])
    const lastinserted = await funcs.getDebateById(idD)
    expect(Object.keys(lastinserted)).not.toEqual(['err'])
    expect(lastinserted.data.data.title).toEqual('DebateUpdatedTest')
    expect(lastinserted.data.data.category).toEqual('Updated Category')
    expect(lastinserted.data.data.info).toEqual('Debate Created in the Update Test')
    expect(await new Date(lastinserted.data.data.date)).toEqual(await new Date('1-1-2019'))
    expect(lastinserted.data.data.description).toEqual('Updating this debate to test')
    const allDebates = await funcs.getDebates()
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)
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
    const deleteresponse = await funcs.deleteDebate(idD)
    expect(Object.keys(deleteresponse.data)).not.toEqual(['err'])
    const allDebates = await funcs.getDebates()
    cntD --;
    expect(Object.keys(allDebates.data)).not.toEqual(['err'])
    expect(allDebates.data.data.length).toBe(cntD)
    done()
})

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
    


