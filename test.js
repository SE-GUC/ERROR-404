const functions = require('./fn');

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

test('Creating new content', async (done) => {
    const allContent = await functions.getAllContent();
    const databaseSize = allContent.data.data.length;
    const content = {type: 'event', description: "nazleen yetkallemo"};
    const newContent = await functions.createContent(content);
    const allContentUpdated = await functions.getAllContent();
    var i;
    var b = false;
    var index = 0;
    for(i = 0; i < allContentUpdated.data.data.length; i++){
        if(allContentUpdated.data.data[i].type === content.type
        && allContentUpdated.data.data[i].description === content.description){
        b = true;

        }
    }
    expect(b).toBeTruthy();
    expect(allContentUpdated.data.data.length).toBe(allContent.data.data.length + 1);
    done();
});

test('Updating existing content', async (done) => {
    const allContent = await functions.getAllContent();
    const id = allContent.data.data[0]._id;
    const updatedData = {description: "a7la mesa 3aleik"};
    const updatedContent = await functions.updateContent(id, updatedData);
    const allContentUpdated = await functions.getAllContent(); 
    expect(allContentUpdated.data.data[0].description).toEqual("a7la mesa 3aleik");
    done();
});

test('Deleting Content' , async(done) => {
    const allContent =  await functions.getAllContent();
    const id = allContent.data.data[0]._id;
    const deletedContent = await functions.deleteContent(id);
    const allContentUpdated = await functions.getAllContent();
    var i;
    var b = true;
    for(i = 0; i < allContentUpdated.data.data.length; i++){
        if(allContentUpdated.data.data[i]._id === id)
        b = false;
    }
    expect(b).toBeTruthy();
    done()
});

test('Getting all clubs', async(done) => {
    const clubs = functions.getAllClubs();
    expect(clubs).toBeDefined;
    done();
})