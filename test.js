const functions = require("./fn");
const funcs = require("./fn");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const content = require("./fn");
const Content = require("./models/Content");
const Article = require("./models/Article");
const AllClubs = require("./models/Club");
const AllUsers = require("./models/User");
const AllChatBars = require("./models/Chatbar");
const axios = require("axios");
var cntD = 0;

beforeAll(async done => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${
      process.env.MONGO_ATLAS_PASSWORD
    }@trail-mflro.mongodb.net/mydb`
  );
  var db = mongoose.connection;
  await db.dropCollection("debates", function(result, err) {
    if (err) console.log("error in dropping debates collection");
    else console.log("debates collection deleted successfully");
  });
  db.close();
  done();
});

afterAll(() => {
  mongoose.disconnect();
});

test("Creating new content", async done => {
  const allContent = await functions.getAllContent();
  const databaseSize = allContent.data.data.length;
  const content = { type: "event", description: "nazleen yetkallemo" };
  const newContent = await functions.createContent(content);
  const allContentUpdated = await functions.getAllContent();
  expect(newContent.data.data.type).toEqual(content.type);
  expect(newContent.data.data.description).toEqual(content.description);
  expect(allContentUpdated.data.data.length).toBe(
    allContent.data.data.length + 1
  );
  done();
});

test("Updating existing content", async done => {
  const allContent = await functions.getAllContent();
  const id = allContent.data.data[0]._id;
  const updatedData = { description: "a7la mesa 3aleik" };
  const updatedContent = await functions.updateContent(id, updatedData);
  const allContentUpdated = await functions.getAllContent();
  expect(allContentUpdated.data.data[0].description).toEqual(
    "a7la mesa 3aleik"
  );
  done();
});

test("Updating existing content", async done => {
  const allContent = await functions.getAllContent();
  const id = allContent.data.data[0]._id;
  const updatedData = { description: "a7la mesa 3aleik" };
  const updatedContent = await functions.updateContent(id, updatedData);
  const allContentUpdated = await functions.getAllContent();
  expect(allContentUpdated.data.data[0].description).toEqual(
    "a7la mesa 3aleik"
  );
  done();
});

test("Deleting Content", async done => {
  const allContent = await functions.getAllContent();
  const id = allContent.data.data[0]._id;
  const deletedContent = await functions.deleteContent(id);
  const allContentUpdated = await functions.getAllContent();
  var i;
  var b = true;
  for (i = 0; i < allContentUpdated.data.data.length; i++) {
    if (allContentUpdated.data.data[i]._id === id) b = false;
  }
  expect(b).toBeTruthy();
  done();
});
test("get all content ", async () => {
  const response = await content.viewcontent();
  expect(response.data).toBeDefined();
});
test("get specific content", async () => {
  const response = await content.viewcertaincontent();
  expect(response.data).toBeDefined();
  //done()
});

test("Getting all clubs", async done => {
  const clubs = functions.getAllClubs();
  expect(clubs).toBeDefined;
  done();
});

// Testing that TIQ admins are able to create new users
test("Creates new user ", async done => {
  const allusersBef = await funcs.getUsers();
  const newU = {
    type: "member",
    firstName: "zakria",
    lastName: "Amir",
    birthDate: "1-2-1998",
    bio: "hey hey",
    email: "zakriaAmir@student.guc.edu.eg",
    password: "12345678",
    house: "Orion",
    clubs: ["TIQ"]
  };
  const NewUser = await functions.createUser(newU);

  const allusersAft = await functions.getUsers();
  const Found = AllUsers.findOne({ _id: NewUser.data.data._id });

  expect(NewUser.data.data.type).toEqual(newU.type);
  expect(NewUser.data.data.firstName).toEqual(newU.firstName);
  expect(NewUser.data.data.lastName).toEqual(newU.lastName);

  expect(NewUser.data.data.birthDate).toEqual(newU.birthDate);
  expect(NewUser.data.data.bio).toEqual(newU.bio);
  expect(NewUser.data.data.email).toEqual(newU.email);
  expect(NewUser.data.data.house).toEqual(newU.house);

  expect(NewUser.data.data.clubs).toEqual(newU.clubs);
  expect(allusersAft.data.data.length).toEqual(
    allusersBef.data.data.length + 1
  );

  expect(Found).toBeDefined();
  await functions.deleteUser(NewUser.data.data._id);
  done();
});

// //-------------------------------------------------------------------------------
// //-------------------------------------------------------------------------------

test("Update user first and last name", async done => {
  const updateUser = { firstName: "lila", lastName: "Hatem" };
  const U = {
    type: "member",
    firstName: "Zeina",
    lastName: "Khalil",
    birthDate: "3-3-1998",
    bio: "Ana Zeina Khalil",
    email: "ZeinaKhalil@student.guc.edu.eg",
    password: "12345678",
    house: "Orion",
    clubs: ["TIQ"]
  };
  const createU = await functions.createUser(U);

  //   const user = await AllUsers.findOne({ _id: createU.data.data._id });
  const user = await functions.getUserById(createU.data.data._id);

  const updUser = await functions.updateUser(createU.data.data._id, updateUser);
  const userAfter = await functions.getUserById(createU.data.data._id);

  expect(userAfter.data[0]).toEqual(U.type);
  expect(userAfter.data[1]).toEqual(updateUser.firstName);
  expect(userAfter.data[2]).toEqual(updateUser.lastName);
  expect(userAfter.data[3]).toEqual(U.birthDate);
  expect(userAfter.data[4]).toEqual(U.bio);
  expect(userAfter.data[5]).toEqual(U.email);
  expect(userAfter.data[7]).toEqual(U.house);
  //   expect(userAfter.data[8]).toEqual(U.clubs[0]);

  await functions.deleteUser(createU.data.data._id);
  done();
});

// //---------------------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------------------

// // // Testing that users are able to view certain Articles
test("testing getting an artice", async done => {
  const articlesBefore = await functions.getArticles();

  const newArticle = {
    title: "educationzzzz",
    description: "educationzzzz",
    author: "ANA Bardo",
    date: "1-1-2011"
  };

  const newA = await functions.createArticles(newArticle);
  const ArticleID = newA.data.data._id;
  const specificArticle = await functions.getArticleById(ArticleID);
  expect(specificArticle.data.data.title).toEqual(newArticle.title);
  expect(specificArticle.data.data.description).toEqual(newArticle.description);
  expect(specificArticle.data.data.author).toEqual(newArticle.author);
  expect(specificArticle.data.data.date).toEqual(newArticle.date);
  await functions.deleteArticles(ArticleID);

  done();
});

// //--------------------------------------------------------------------------------------------
// //-------------------------------------------------------------------------------------------

// // // Testing that users are able to view Articles
test("Number of Articles should be ", async done => {
  ///doneee
  const articlesBefore = await functions.getArticles();

  const newArticle = {
    title: "Women",
    description: "Women",
    author: "ANA",
    date: "25-3-2019"
  };

  const newA = await functions.createArticles(newArticle);
  const ArticleID = newA.data.data._id;

  const articlesAfter = await functions.getArticles();
  expect(articlesAfter.data.data.length).toEqual(
    articlesBefore.data.data.length + 1
  );

  await functions.deleteArticles(ArticleID);

  done();
});

// //-----------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------

// // //Testing that TIQ admins are able to create new motions on the Debate live
test("creating Motion with name of Engineering", async () => {
  const motion = {
    debateLiveTitle: "Engineering",
    date: "11-4-2019"
  };
  const newM = await functions.createMotion(motion);
  const newMotionId = newM.data.data._id;
  console.log(newMotionId);

  const getM = AllChatBars.findOne({ _id: newMotionId });
  //   console.log(getM);
  expect(newM.data.data.debateLiveTitle).toEqual(motion.debateLiveTitle);
  expect(newM.data.data.date).toEqual(motion.date);

  expect(getM).toBeDefined();

  await functions.deleteDebateLive(newMotionId);
});
// //--------------------------------------------------------------------------------------------------
// //--------------------------------------------------------------------------------------------------

//Testing that the number of responses are always updated
test("Number of response updated", async done => {
  //   const motions = await funcs.getDebateLive();
  const mo = {
    debateLiveTitle: "zommmbaaaa",
    date: "10-11-2007"
  };
  const createNew = await functions.createMotion(mo);
  const moId = createNew.data.data._id;

  const wantedMotion = await functions.getDebateLiveByIdFor(moId);
  const oldNoOFResponses = wantedMotion.data.numberOfResponses;

  const newM = await funcs.updateNumberOfResponses(moId, "I agree On That....");
  const newMO = await functions.getDebateLiveByIdFor(moId);
  const newNoOfResponses = newMO.data.numberOfResponses;

  expect(newNoOfResponses - oldNoOFResponses).toEqual(1);

  await functions.deleteDebateLive(moId);
  done();
});

//------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//create Article testing
test("It responds with the newly created Article", async () => {
  const response = await funcs.getArticles();
  const resLength = response.data.data.length;
  const NewArticle = {
    title: "The downfall of global capitalism.",
    description: "This article discuss downfall of global capitalism.",
    author: "BOAs",
    date: "25-3-2019"
  };
  const createNewArticle = await funcs.createArticles(NewArticle);
  const createNewArticleId = createNewArticle.data.data._id;
  const getNewArcticle = await funcs.getArticleById(createNewArticleId);
  const responseNew = await funcs.getArticles();
  expect(getNewArcticle.data.data).not.toBe(null);
  expect(createNewArticle.data.data.title).toEqual(
    "The downfall of global capitalism."
  );
  expect(createNewArticle.data.data.description).toEqual(
    "This article discuss downfall of global capitalism."
  );
  expect(createNewArticle.data.data.author).toEqual("BOAs");
  expect(createNewArticle.data.data.date).toEqual("25-3-2019");
  expect(responseNew.data.data.length).toBe(resLength + 1);
});
//update Article testing
test("It responds with an updated article", async () => {
  const NewArticle = {
    title: "The downfall of global capitalism.",
    description: "This article discuss downfall of global capitalism.",
    author: "BOAs",
    date: "25-3-2019"
  };
  const createNewArticle = await funcs.createArticles(NewArticle);
  const createNewArticleId = createNewArticle.data.data._id;
  const updatedArticle = await funcs.updateArticles(createNewArticleId, {
    description: "Read more about downfall of global capitalism."
  });
  expect(updatedArticle.data.data.description).toEqual(
    "Read more about downfall of global capitalism."
  );
  expect(updatedArticle.data.data.title).toEqual(
    "The downfall of global capitalism."
  );
  expect(updatedArticle.data.data.author).toEqual("BOAs");
  expect(updatedArticle.data.data.date).toEqual("25-3-2019");
});
//delete article testing
test("It responds with deleted article", async () => {
  const response = await funcs.getArticles();
  const resLength = response.data.data.length;
  const NewArticle = {
    title: "The downfall of global capitalism.",
    description: "This article discuss downfall of global capitalism.",
    author: "BOAs",
    date: "25-3-2019"
  };
  const createNewArticle = await funcs.createArticles(NewArticle);
  const createNewArticleId = createNewArticle.data.data._id;
  const deletedArticle = await funcs.deleteArticles(createNewArticleId);
  const responseNew = await funcs.getArticleById(deletedArticle.data.data._id);
  const newArticleData = await funcs.getArticles();
  expect(responseNew.data.data).toEqual(null);
  expect(newArticleData.data.data.length).toBe(resLength);
});
//     // delete Debate live testing
test("It responds with deleted Debate Live", async () => {
  const response = await funcs.getDebateLive();
  const resLength = response.data.data.length;
  const debateLive = {
    debateLiveTitle:
      "TH supports the decline of the nations-state's power in an increasingly globalised world.",
    date: "12-11-2018"
  };
  const createDebateLive = await funcs.createMotion(debateLive);
  const createDebateLiveId = createDebateLive.data.data._id;
  const deletedDebateLive = await funcs.deleteDebateLive(createDebateLiveId);
  const responseNew = await funcs.getDebateLiveById(createDebateLiveId);
  const newDebateLiveData = await funcs.getDebateLive();
  expect(responseNew.data.data).toEqual(undefined);
  expect(newDebateLiveData.data.data.length).toBe(resLength);
});
//get Debate Live testing
test("It responds with all the Debate Lives", async () => {
  const response = await funcs.getDebateLive();
  const resLength = response.data.data.length;
  const debateLive = {
    debateLiveTitle:
      "TH supports the decline of the nations-state's power in an increasingly globalised world.",
    date: "12-11-2018"
  };
  const createDebateLive = await funcs.createMotion(debateLive);
  const newDebateLiveData = await funcs.getDebateLive();
  expect(newDebateLiveData.data.data.length).toBe(resLength + 1);
});

//* ********************************************************** */
//* *****************START OF MY TESTS************************** */
//* ********************************************************** */

test("A TIQ user should be able to view all Debates", async done => {
  const debate1 = await funcs.createDebate({
    title: "Test1",
    category: "Test1",
    date: "1-1-2019",
    info: "test1",
    description: "test1"
  });
  const debate2 = await funcs.createDebate({
    title: "Test2",
    category: "Test2",
    date: "2-1-2019",
    info: "test2",
    description: "test2"
  });
  const debate3 = await funcs.createDebate({
    title: "Test3",
    category: "Test3",
    date: "3-1-2019",
    info: "test3",
    description: "test3"
  });
  const debates = await funcs.getDebates();
  expect(Object.keys(debates.data)).not.toEqual(["err"]);
  cntD = debates.data.data.length;
  expect(cntD).toBe(3);
  expect(debates.data.data[0]).toEqual(debate1.data.data);
  expect(debates.data.data[1]).toEqual(debate2.data.data);
  expect(debates.data.data[2]).toEqual(debate3.data.data);
  done();
});

test("A TIQ admin should not be able to create a Debate with wrong schema", async done => {
  const newDebate = await funcs.createInvalidDebate();
  expect(Object.keys(newDebate.data)).toEqual(["err"]);
  const allDebates = await funcs.getDebates();
  expect(Object.keys(allDebates.data)).not.toEqual(["err"]);
  expect(allDebates.data.data.length).toBe(cntD);
  done();
});

test("A TIQ admin should be able to create a new Debate", async done => {
  const create = {
    title: "createTestTitle",
    category: "CreateTestcategory",
    date: "1-1-2019",
    info: "createTestInfo",
    description: "CreateTestDescription"
  };
  const newDebate = await funcs.createDebate(create);
  cntD++;
  expect(newDebate.data.data.title).toEqual(create.title);
  expect(newDebate.data.data.category).toEqual(create.category);
  expect(newDebate.data.data.info).toEqual(create.info);
  expect(new Date(newDebate.data.data.date)).toEqual(new Date(create.date));
  expect(newDebate.data.data.description).toEqual(create.description);
  const allDebates = await funcs.getDebates();
  expect(Object.keys(allDebates.data)).not.toEqual(["err"]);
  expect(allDebates.data.data.length).toBe(cntD);
  done();
});

test("A TIQ user should be able to view a certian debate", async done => {
  const create = {
    title: "viewbyIDTestTitle",
    category: "viewbyIDTestcategory",
    date: "1-1-2019",
    info: "viewbyIDTestInfo",
    description: "viewbyIDTestDescription"
  };
  const newDebate = await funcs.createDebate(create);
  cntD++;
  const Debate = await funcs.getDebateById(newDebate.data.data._id);
  expect(Object.keys(Debate.data)).not.toEqual(["err"]);
  expect(Debate.data.data).toEqual(newDebate.data.data);
  done();
});

test("A TIQ user should not be able to view a non-existing debate", async done => {
  const Debate = await funcs.getDebateById(-1);
  expect(Object.keys(Debate.data)).toEqual(["err"]);
  done();
});

test("A TIQ admin should not be able to update an existing debate with a wrong schema", async done => {
  const create = {
    title: "InvalidUpdateTestTitle",
    category: "InvalidUpdateTestcategory",
    date: "1-1-2019",
    info: "InvalidUpdateTestInfo",
    description: "InvalidUpdateTestDescription"
  };
  const newDebate = await funcs.createDebate(create);
  cntD++;
  const updateresponse = await funcs.updateInvalidDebate(
    newDebate.data.data._id
  );
  expect(Object.keys(updateresponse.data)).toEqual(["err"]);
  const debateafterupdate = await funcs.getDebateById(newDebate.data.data._id);
  expect(debateafterupdate.data.data).toEqual(newDebate.data.data);
  done();
});

test("A TIQ admin should be able to update an existing debate", async done => {
  const create = {
    title: "UpdateTestTitle",
    category: "UpdateTestcategory",
    date: "1-1-2019",
    info: "UpdateTestInfo",
    description: "UpdateTestDescription"
  };
  const newDebate = await funcs.createDebate(create);
  cntD++;
  const id = newDebate.data.data._id;
  const update = {
    title: "AfterUpdateTestTitle",
    category: "AfterUpdateTestcategory",
    date: "1-1-2019",
    info: "AfterUpdateTestInfo",
    description: "AfterUpdateTestDescription"
  };
  const updateresponse = await funcs.updateDebate(id, update);
  expect(Object.keys(updateresponse.data)).not.toEqual(["err"]);
  const debateafterupdate = await funcs.getDebateById(id);
  expect(debateafterupdate.data.data.title).toEqual(update.title);
  expect(debateafterupdate.data.data.category).toEqual(update.category);
  expect(debateafterupdate.data.data.info).toEqual(update.info);
  expect(debateafterupdate.data.data.description).toEqual(update.description);
  expect(new Date(debateafterupdate.data.data.date)).toEqual(
    new Date(update.date)
  );
  done();
});

test("A TIQ admin should not be able to delete a non-existing debate", async done => {
  const deleteresponse = await funcs.deleteDebate(-1);
  expect(Object.keys(deleteresponse.data)).toEqual(["err"]);
  const allDebates = await funcs.getDebates();
  expect(Object.keys(allDebates.data)).not.toEqual(["err"]);
  expect(allDebates.data.data.length).toBe(cntD);
  done();
});

test("A TIQ admin should be able to delete an existing debate", async done => {
  const create = {
    title: "DeleteTestTitle",
    category: "DeleteTestcategory",
    date: "1-1-2019",
    info: "DeleteTestInfo",
    description: "DeleteTestDescription"
  };
  const newDebate = await funcs.createDebate(create);
  cntD++;
  const id = newDebate.data.data._id;
  const deleteresponse = await funcs.deleteDebate(id);
  expect(Object.keys(deleteresponse.data)).not.toEqual(["err"]);
  cntD--;
  const getAfterDelete = await funcs.getDebateById(id);
  expect(getAfterDelete.data.data).toEqual(null);
  const allDebates = await funcs.getDebates();
  expect(Object.keys(allDebates.data)).not.toEqual(["err"]);
  expect(allDebates.data.data.length).toBe(cntD);
  done();
});

//* ********************************************************** */
//* *****************END OF MY TESTS************************** */
//* ********************************************************** */



test("Creating a new club adds it to the database", async done => {
  const allClubs = await functions.getAllClubs();
  const club = { name: "TEDx", description: "for pretentious people" };
  const newClub = await functions.createClub(club);
  const allClubsUpdated = await functions.getAllClubs();
  const testClub = AllClubs.findOne({ _id: newClub.data.data._id });
  expect(club.name).toEqual(newClub.data.data.name);
  expect(club.description).toEqual(newClub.data.data.description);
  expect(testClub).toBeDefined();
  expect(allClubsUpdated.data.data.length).toBe(allClubs.data.data.length + 1);
  done();
});

test("Getting club by id", async done => {
  const allClubs = await functions.getAllClubs();
  const firstClub = allClubs.data.data[0];
  const club = await functions.getClubById(firstClub._id);
  expect(club.data.data.name).toEqual(firstClub.name);
  expect(club.data.data.description).toEqual(firstClub.description);
  done();
});

test("Updating an existing club", async done => {
  const allClubs = await functions.getAllClubs();
  const id = allClubs.data.data[0]._id;
  const updatedData = { description: "a7la mesa 3aleik" };
  const updatedClub = await functions.updateClub(id, updatedData);
  const allClubsUpdated = await functions.getAllClubs();
  expect(allClubsUpdated.data.data[0].description).toEqual("a7la mesa 3aleik");
  done();
});

test("Deleting a club", async done => {
  const allClubs = await functions.getAllClubs();
  const id = allClubs.data.data[0]._id;
  await functions.deleteClub(id);
  const allClubsUpdated = await functions.getAllClubs();
  var i;
  var b = true;
  for (i = 0; i < allClubsUpdated.data.data.length; i++) {
    if (allClubsUpdated.data.data[i]._id === id) b = false;
  }
  expect(b).toBeTruthy();
  done();
});



test("Creating new content", async done => {
  const allContent = await functions.getAllContent();
  const databaseSize = allContent.data.data.length;
  const content = { type: "event", description: "nazleen yetkallemo" };
  const newContent = await functions.createContent(content);
  const allContentUpdated = await functions.getAllContent();
  var i;
  var b = false;
  var index = 0;
  for (i = 0; i < allContentUpdated.data.data.length; i++) {
    if (
      allContentUpdated.data.data[i].type === content.type &&
      allContentUpdated.data.data[i].description === content.description
    ) {
      b = true;
    }
  }
  expect(b).toBeTruthy();
  expect(allContentUpdated.data.data.length).toBe(
    allContent.data.data.length + 1
  );
  done();
});
test("get all Users", async () => {
  const response = await funcs.getUsers();
  expect(response.data).toBeDefined();
});

test("get specific user", async () => {
  const response = await funcs.getUserByIdFound();
  expect(response.data).toBeDefined();
});

test("get specific user failed", async () => {
  const response = await funcs.getUserByIdNotFound();
  expect(response.data).toEqual("Cannot find the user ");
});

test("Delete User", async () => {
  const check = (await funcs.getUsers()).data.data.length;
  const response = await funcs.deleteUserSuccess();
  const after = (await funcs.getUsers()).data.data.length;
  expect(after).toEqual(check);
});

test("Scores gets updated", async () => {
  const response = await funcs.updateUserScore();
  expect(response.data).toEqual({ msg: "Score updated" });
});
test("Updating existing content", async done => {
  const allContent = await functions.getAllContent();
  const id = allContent.data.data[0]._id;
  const updatedData = { description: "a7la mesa 3aleik" };
  const updatedContent = await functions.updateContent(id, updatedData);
  const allContentUpdated = await functions.getAllContent();
  expect(allContentUpdated.data.data[0].description).toEqual(
    "a7la mesa 3aleik"
  );
  done();
});

test("Deleting Content", async done => {
  const allContent = await functions.getAllContent();
  const id = allContent.data.data[0]._id;
  const deletedContent = await functions.deleteContent(id);
  const allContentUpdated = await functions.getAllContent();
  var i;
  var b = true;
  for (i = 0; i < allContentUpdated.data.data.length; i++) {
    if (allContentUpdated.data.data[i]._id === id) b = false;
  }
  expect(b).toBeTruthy();
  done();
});
test("get all content ", async () => {
  const response = await content.viewcontent();
  expect(response.data).toBeDefined();
});
test("get specific content", async () => {
  const response = await content.viewcertaincontent();
  expect(response.data).toBeDefined();
  //done()
});

//     //test  get FAQ
test("It responds with the FAQs", async (done) => {
  const response1 =  await funcs.getFAQs()
  const length=response1.data.data.length
  await funcs.createFAQs()
  const response =  await funcs.getFAQs()
  const resLength  = response.data.data.length
  expect(resLength).toBe(length+1)
  done()

})

//test  get certain FAQ
test("It responds with the FAQ", async (done) => {
await funcs.createFAQs()
const response =  await funcs.getFAQs() 
const question =response.data.data[0].question
const answer =response.data.data[0].answer
const FAQ = await funcs.getFAQById(response.data.data[0]._id)
const faq=FAQ.data.data[0]
expect(faq._id).toEqual(response.data.data[0]._id)
expect(faq.question).toEqual(question)
expect(faq.answer).toEqual(answer)
done()

})

//delete FAQ testing
test("It responds with the deleted FAQ",async(done) =>{
const newFAQ = await funcs.createFAQs()
const newFAQ2 = await funcs.createFAQs()
const id1=newFAQ.data.data._id
const id2=newFAQ2.data.data._id
const deletedFAQ = await funcs.deleteFAQs(id1)
expect(deletedFAQ.data.data.question).toEqual("how are you ?")
expect(deletedFAQ.data.data.answer).toEqual("meh")
expect(deletedFAQ.data.data._id).toEqual(id1)
const f=await funcs.getFAQById(id1)
const f2=await funcs.getFAQById(id2)
expect(f.data.data[0]).toBeUndefined();
expect(f2.data.data[0].question).toEqual("how are you ?");
expect(f2.data.data[0].answer).toEqual("meh");
done()

})

// //test create new FAQ
test("It responds with the newly created FAQ", async (done) => {
      const response1 =  await funcs.getFAQs()
      const length=response1.data.data.length
      const newFaq=await funcs.createFAQs()
      const response =  await funcs.getFAQs()
      const resLength  = response.data.data.length
      expect(resLength).toBe(length+1)
      expect(newFaq.data.data.question).toEqual("how are you ?")
      expect(newFaq.data.data.answer).toEqual("meh")
      done()
})
// //update FAQ testing
test("It responds with an updated FAQ", async (done) => {
const newFAQ = await funcs.createFAQs()
const newFAQ2 = await funcs.createFAQs()
// const response =  await funcs.getFAQs() 
const id1=newFAQ.data.data._id
const id2=newFAQ2.data.data._id
await funcs.updateFAQs(id1)
const response1 =  await funcs.getFAQById(id1) 
const response2 =  await funcs.getFAQById(id2) 
expect(response1.data.data[0].answer).toEqual("nouran")
expect(response1.data.data[0].question).toEqual("what's your name")
expect(response2.data.data[0].answer).toEqual("meh")
expect(response2.data.data[0].question).toEqual("how are you ?")
done()

})



//test  get admin unanswered questions
test("It responds with the unanswered questions", async (done) => {
const response1 =  await funcs.getQuestionsAdmin()
const length=response1.data.data.length
await funcs.askQuestion()
const response =  await funcs.getQuestionsAdmin()
expect(response.data.data.length).toBe(length+1)

var i;
for(i=0;i<response.data.data.length;i++){
  expect(response.data.data[i].answer).toBeUndefined();
}
done()

})
//test  get allquestions by admin 

test("It responds with the questions", async (done) => {
      const response1 =  await funcs.getQuestions()
      const length=response1.data.data.length
      await funcs.askQuestion()
      const response =  await funcs.getQuestions()
      const resLength  = response.data.data.length
      expect(resLength).toBe(length+1)
      done()

})
//delete Question testing
test("It responds with the deleted Question",async(done) =>{
const newQ = await funcs.askQuestion()
const newQ2 = await funcs.askQuestion()
const id1=newQ.data.data._id
const id2=newQ2.data.data._id
const deletedQ = await funcs.deleteQuestions(id1)
expect(deletedQ.data.data.question).toEqual("how are you ?")
expect(deletedQ.data.data.user).toEqual("blala")
expect(deletedQ.data.data._id).toEqual(id1)
const f=await funcs.getQById(id1)
const f2=await funcs.getQById(id2)
expect(f.data.data[0]).toBeUndefined();
expect(f2.data.data[0].question).toEqual("how are you ?");
expect(f2.data.data[0].user).toEqual("blala");
done()

})

//asking question testing
test("It responds with the newly asked question", async (done) => {
      const response =  await funcs.getQuestionsAdmin()
      const resLength  = response.data.data.length
      const newQuestion = await funcs.askQuestion()
      expect(newQuestion.data.data.question).toEqual("how are you ?")
      expect(newQuestion.data.data.user).toEqual("blala")
      const responseNew =  await funcs.getQuestionsAdmin()

      expect(responseNew.data.data.length).toBe(resLength+1)
      done()

  })



//     //answer question testing
test("It responds with the answered question", async (done) => {
  await funcs.askQuestion()
  const response =  await funcs.getQuestionsAdmin() 
  const answeredQuestion = await funcs.answerQuestion(response.data.data[0]._id)
  const response1 =  await funcs.getQById(response.data.data[0]._id) 
  expect(response1.data.data[0].answer).toEqual("nouran")
  expect(response1.data.data[0].question).toEqual(response.data.data[0].question)
  done()

})


// //test  get the user's questions
test("It responds with the user's questions", async (done) => {
const newQuestion =await funcs.askQuestion()
const id=newQuestion.data.data._id
const answeredQuestion = await funcs.answerQuestion(id)

const response =  await funcs.getAnswers("blala")
var i;
for(i=0;i<response.data.data.length;i++){
  expect(response.data.data[i].user).toEqual("blala");
}
const answered=await funcs.getQById(id)
console.log(answered.data.data[0].answer)
expect(answered.data.data[0].answer).toEqual("nouran")
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



// Testing search for users by name 
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




//  //Testing search for users by type 
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


//Testing search for articles by title 
test("It responds with the searched article by a word in the title", async (done) => {
  
const article =  await funcs.searchArticlesByTitle()
var i;
for(i=0;i<article.data.data.length;i++){
  const art=article.data.data[i].title
  expect(art).toEqual(expect.stringContaining("are"));
 
}

done()
})

//Testing search for motions in debate live  by title 
test("It responds with the searched motion by a word in the title", async (done) => {
  
const motion =  await funcs.searchMotionsByTitle()
var i;
for(i=0;i<motion.data.data.length;i++){
  const art=motion.data.data[i].debateLiveTitle
  expect(art).toEqual(expect.stringContaining("are"));
 
}

done()
})
