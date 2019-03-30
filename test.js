const functions = require('./fn');

test('Getting club by id', async () => {
    const allClubs = await functions.getAllClubs();
    const firstClub = allClubs.data.data[0];
    const club = await functions.getClubById(firstClub._id);
    expect(club.data.data.name).toEqual(firstClub.name);
    expect(club.data.data.description).toEqual(firstClub.description);
});

// test('Creating a new club adds it to the database', async (done) => {
//     const allClubs = await functions.getAllClubs();
//     const databaseSize = allClubs.data.data.length;
//     const club = {name: "Nebny", description: "mesh charity bas ya3nii"};
//     const newClub = await functions.createClub(club);
//     const allClubsUpdated = await functions.getAllClubs();
//     var i;
//     var b = false;
//     for(i = 0; i < allClubsUpdated.data.data.length; i++){
//         if(allClubsUpdated.data.data[i].name === club.name && allClubsUpdated.data.data[i].description === club.description)
//         b = true;
//     }
//     expect(b).toBeTruthy();
//     expect(allClubsUpdated.data.data.length).toBe(allClubs.data.data.length + 1);
//     done();
// });

// test('Updating an existing club', async (done) => {
//     const allClubs = await functions.getAllClubs();
//     const id = allClubs.data.data[0]._id;
//     const updatedData = {description: "a7la mesa 3aleik"};
//     const updatedClub = await functions.updateClub(id, updatedData);
//     const allClubsUpdated = await functions.getAllClubs(); 
//     expect(allClubsUpdated.data.data[0].description).toEqual("a7la mesa 3aleik");
//     done();
// });

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