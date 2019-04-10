const functions = require("./fn");
const funcs = require("./fn");
const content = require("./fn");
const Content = require("./models/User");
const Article = require("./models/Article");
const axios = require("axios");
const AllUsers = require("./models/User");
const AllChatBars = require("./models/Chatbar");

var idD = -1;
var cntD = 0;

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

//---------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

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
  console.log(2);
  console.log(0);
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
  console.log(3);
  console.log("id :" + createU.data.data._id);

  //   const user = await AllUsers.findOne({ _id: createU.data.data._id });
  const user = await functions.getUserById(createU.data.data._id);
  console.log("user ----> :" + user.data);

  const updUser = await functions.updateUser(createU.data.data._id, updateUser);
  const userAfter = await functions.getUserById(createU.data.data._id);
  console.log(5);

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
  console.log(1);
  const moId = createNew.data.data._id;
  console.log("ID: " + moId);

  const wantedMotion = await functions.getDebateLiveByIdFor(moId);
  const oldNoOFResponses = wantedMotion.data.numberOfResponses;
  console.log("oldNumberResponses : " + oldNoOFResponses);

  const newM = await funcs.updateNumberOfResponses(moId, "I agree On That....");
  const newMO = await functions.getDebateLiveByIdFor(moId);
  const newNoOfResponses = newMO.data.numberOfResponses;
  console.log("new Number : " + newNoOfResponses);

  expect(newNoOfResponses - oldNoOFResponses).toEqual(1);

  await functions.deleteDebateLive(moId);
  done();
});

//------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

//create Article testing
test("It responds with the newly created Article", async () => {
  const response = await funcs.getArticles();
  const resLength = response.data.data.length;
  const newArticle = await funcs.createArticles();
  expect(newArticle.data.data.title).toEqual(
    "The downfall of global capitalism."
  );
  expect(newArticle.data.data.description).toEqual(
    "This article discuss downfall of global capitalism."
  );
  expect(newArticle.data.data.author).toEqual("BOAs");
  expect(newArticle.data.data.date).toEqual("25-3-2019");
  const responseNew = await funcs.getArticles();
  expect(responseNew.data.data.length).toBe(resLength + 1);
});
//update Article testing
test("It responds with an updated article", async () => {
  const updatedArticle = await funcs.updateArticles();

  expect(updatedArticle.data.data.description).toEqual(
    "Is the downfall of global capitalism real, read the article to find out"
  );
});
//delete article testing
test("It responds with deleted article", async () => {
  const response = await funcs.getArticles();
  const resLength = response.data.data.length;
  const deletedArticle = await funcs.deleteArticles();
  const responseNew = await funcs.getArticles();
  expect(responseNew.data.data.length).toBe(resLength);
});
// delete Debate live testing
test("It responds with deleted Debate Live", async () => {
  const response = await funcs.getDebateLive();
  const resLength = response.data.data.length;
  const deletedDebateLive = await funcs.deleteDebateLive();
  const responseNew = await funcs.getDebateLive();
  expect(responseNew.data.data.length).toBe(resLength);
});
//get Debate Live testing
test("It responds with all the Debate Lives", async () => {
  const response = await funcs.getDebateLive();
  expect(response.data).toBeDefined();
});
test("A TIQ user should be able to view all Debates", async done => {
  const debates = await funcs.getDebates();
  expect(Object.keys(debates.data)).not.toEqual(["err"]);
  cntD = debates.data.data.length;
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
  const newDebate = await funcs.createDebate();
  expect(newDebate.data.data.title).toEqual("DebateTest");
  expect(newDebate.data.data.category).toEqual("Test Category");
  expect(newDebate.data.data.info).toEqual("Debate Created in the Test");
  expect(await new Date(newDebate.data.data.date)).toEqual(
    await new Date("1-1-2019")
  );
  expect(newDebate.data.data.description).toEqual(
    "Creating this debate to test"
  );
  const allDebates = await funcs.getDebates();
  cntD++;
  expect(Object.keys(allDebates.data)).not.toEqual(["err"]);
  expect(allDebates.data.data.length).toBe(cntD);
  idD = newDebate.data.data._id;
  done();
});

test("A TIQ user should be able to view a certian debate", async done => {
  const Debate = await funcs.getDebateById(idD);
  expect(Debate.data.data.title).toEqual("DebateTest");
  expect(Debate.data.data.category).toEqual("Test Category");
  expect(Debate.data.data.info).toEqual("Debate Created in the Test");
  expect(await new Date(Debate.data.data.date)).toEqual(
    await new Date("1-1-2019")
  );
  expect(Debate.data.data.description).toEqual("Creating this debate to test");
  done();
});

test("A TIQ user should not be able to view a non-existing debate", async done => {
  const Debate = await funcs.getDebateById(-1);
  expect(Object.keys(Debate.data)).toEqual(["err"]);
  done();
});

test("A TIQ admin should not be able to update an existing debate with a wrong schema", async done => {
  const updateresponse = await funcs.updateInvalidDebate(idD);
  expect(Object.keys(updateresponse.data)).toEqual(["err"]);
  const debates = await funcs.getDebates();
  const lastinserted = await funcs.getDebateById(idD);
  expect(lastinserted.data.data.title).toEqual("DebateTest");
  expect(lastinserted.data.data.category).toEqual("Test Category");
  expect(lastinserted.data.data.info).toEqual("Debate Created in the Test");
  expect(await new Date(lastinserted.data.data.date)).toEqual(
    await new Date("1-1-2019")
  );
  expect(lastinserted.data.data.description).toEqual(
    "Creating this debate to test"
  );
  done();
});

test("A TIQ admin should be able to update an existing debate", async done => {
  const updateresponse = await funcs.updateDebate(idD);
  expect(Object.keys(updateresponse.data)).toEqual(["data"]);
  const lastinserted = await funcs.getDebateById(idD);
  expect(Object.keys(lastinserted)).not.toEqual(["err"]);
  expect(lastinserted.data.data.title).toEqual("DebateUpdatedTest");
  expect(lastinserted.data.data.category).toEqual("Updated Category");
  expect(lastinserted.data.data.info).toEqual(
    "Debate Created in the Update Test"
  );
  expect(await new Date(lastinserted.data.data.date)).toEqual(
    await new Date("1-1-2019")
  );
  expect(lastinserted.data.data.description).toEqual(
    "Updating this debate to test"
  );
  const allDebates = await funcs.getDebates();
  expect(Object.keys(allDebates.data)).not.toEqual(["err"]);
  expect(allDebates.data.data.length).toBe(cntD);
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
  const deleteresponse = await funcs.deleteDebate(idD);
  expect(Object.keys(deleteresponse.data)).not.toEqual(["err"]);
  const allDebates = await funcs.getDebates();
  cntD--;
  expect(Object.keys(allDebates.data)).not.toEqual(["err"]);
  expect(allDebates.data.data.length).toBe(cntD);
  done();
});

//Testing search for debates by date
test("It responds with the searched debate by date", async done => {
  const debate = await funcs.searchDebatesbydate();
  var i;
  var b = true;
  const testDate = "2001-12-20T22:00:00.000Z";
  for (i = 0; i < debate.data.data.length; i++) {
    if (debate.data.data[i].date !== testDate) {
      b = false;
    }
  }
  expect(b).toBeTruthy();
  done();
});
//Testing search for debates by category
test("It responds with the searched debate by category", async done => {
  const debate = await funcs.searchDebatesbycategory();
  var i;
  var b = true;
  for (i = 0; i < debate.data.data.length; i++) {
    if (debate.data.data[i].category !== "health") {
      b = false;
    }
  }

  expect(b).toBeTruthy();
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

test("Creating a new club adds it to the database", async done => {
  const allClubs = await functions.getAllClubs();
  const databaseSize = allClubs.data.data.length;
  const club = { name: "Nebny", description: "mesh charity bas ya3nii" };
  const newClub = await functions.createClub(club);
  const allClubsUpdated = await functions.getAllClubs();
  var i;
  var b = false;
  for (i = 0; i < allClubsUpdated.data.data.length; i++) {
    if (
      allClubsUpdated.data.data[i].name === club.name &&
      allClubsUpdated.data.data[i].description === club.description
    )
      b = true;
  }
  expect(b).toBeTruthy();
  expect(allClubsUpdated.data.data.length).toBe(allClubs.data.data.length + 1);
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
  const deletedClub = await functions.deleteClub(id);
  const allClubsUpdated = await functions.getAllClubs();
  var i;
  var b = true;
  for (i = 0; i < allClubsUpdated.data.data.length; i++) {
    if (allClubsUpdated.data.data[i]._id === id) b = false;
  }
  expect(b).toBeTruthy();
  done();
});
//test  get FAQ
test("It responds with the FAQs", async done => {
  const response = await funcs.getFAQs();
  expect(response.data.data).toBeDefined();
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

//test  get certain FAQ
test("It responds with the FAQ", async done => {
  const response = await funcs.getFAQs();
  const FAQ = await funcs.getFAQById(response.data.data[0]._id);
  const faq = FAQ.data.data[0];
  expect(faq._id).toEqual(response.data.data[0]._id);
  done();
});

//     //delete FAQ testing
test("It responds with the deleted FAQ", async done => {
  const response = await funcs.getFAQs();
  const resLength = response.data.data.length;
  const deletedFAQ = await funcs.deleteFAQs(response.data.data[0]._id);
  const response1 = await funcs.getFAQs();
  var i;
  var b = true;
  for (i = 0; i < response1.data.data.length; i++) {
    if (response1.data.data[i]._id === response.data.data[0]._id) {
      b = false;
    }
  }
  expect(b).toBeTruthy(); //a7ot el id el mazboot

  done();
});
//Testing search for users by name
test("It responds with the searched user by name", async done => {
  const user = await funcs.searchUsersByName();
  var i;
  var b = true;
  for (i = 0; i < user.data.data.length; i++) {
    if (
      user.data.data[i].firstName !== "nouran" &&
      user.data.data[i].lastName !== "nouran"
    ) {
      b = false;
    }
  }

  expect(b).toBeTruthy();
  done();
});

//Testing search for users by type
test("It responds with the searched user by type", async done => {
  const user = await funcs.searchUsersByType();
  var i;
  var b = true;
  for (i = 0; i < user.data.data.length; i++) {
    if (user.data.data[i].type !== "alumni") {
      b = false;
    }
  }

  expect(b).toBeTruthy();
  done();
});

//test create new FAQ
test("It responds with the newly created FAQ", async done => {
  const response = await funcs.getFAQs();
  const resLength = response.data.data.length;
  const newFAQ = await funcs.createFAQs();
  expect(newFAQ.data.data.question).toEqual("how are you ?");
  expect(newFAQ.data.data.answer).toEqual("meh");
  const responseNew = await funcs.getFAQs();
  expect(responseNew.data.data.length).toBe(resLength + 1);
  done();
});
// //     //update FAQ testing
test("It responds with an updated FAQ", async done => {
  const newFAQ = await funcs.createFAQs();
  const response = await funcs.getFAQs();
  const updatedFAQ = await funcs.updateFAQs(response.data.data[0]._id);
  const response1 = await funcs.getFAQs();
  const newFAQ1 = response1.data.data[0];
  expect(newFAQ1.answer).toEqual("nouran");
  expect(newFAQ1.question).toEqual("what's your name");
  done();
});
//Testing search for articles by title
test("It responds with the searched article by a word in the title", async done => {
  const article = await funcs.searchArticlesByTitle();
  var i;
  for (i = 0; i < article.data.data.length; i++) {
    const art = article.data.data[i].title;
    expect(art).toEqual(expect.stringContaining("are"));
  }

  done();
});

//Testing search for motions in debate live  by title
test("It responds with the searched motion by a word in the title", async done => {
  const motion = await funcs.searchMotionsByTitle();
  var i;
  for (i = 0; i < motion.data.data.length; i++) {
    const art = motion.data.data[i].debateLiveTitle;
    expect(art).toEqual(expect.stringContaining("are"));
  }

  done();
});
//test  get admin unanswered questions
test("It responds with the unanswered questions", async done => {
  const newQuestion = await axios.post(
    "http://localhost:3000/api/Questions/ask",
    {
      question: "dsjk are djsk",
      user: "dskjflkdf"
    }
  );
  const response = await funcs.getQuestionsAdmin();
  var i;
  for (i = 0; i < response.data.data.length; i++) {
    expect(response.data.data[i].answer).toBeUndefined();
  }
  done();
});
//test  get allquestions by admin

test("It responds with the questions", async done => {
  const response = await funcs.getQuestions();
  expect(response.data.data).toBeDefined();
  done();
});
//delete Question testing
test("It responds with the deleted Question", async done => {
  const newQuestion = await axios.post(
    "http://localhost:3000/api/Questions/ask",
    {
      question: "dsjk are djsk",
      user: "dskjflkdf"
    }
  );
  const response = await funcs.getQuestions();
  const deletedQuestion = await funcs.deleteQuestions(
    response.data.data[0]._id
  );
  const response1 = await funcs.getQuestions();
  var i;
  var b = true;
  for (i = 0; i < response1.data.data.length; i++) {
    if (response1.data.data[i]._id === response.data.data[0]._id) {
      b = false;
    }
  }
  expect(b).toBeTruthy(); //a7ot el id el mazboot

  done();
});

//asking question testing
test("It responds with the newly asked question", async done => {
  const response = await funcs.getQuestionsAdmin();
  const resLength = response.data.data.length;
  const newQuestion = await funcs.askQuestion();
  expect(newQuestion.data.data.question).toEqual("how are you ?");
  expect(newQuestion.data.data.user).toEqual("blala");
  const responseNew = await funcs.getQuestionsAdmin();

  expect(responseNew.data.data.length).toBe(resLength + 1);
  done();
});

//     //answer question testing
test("It responds with the answered question", async done => {
  const newQuestion = await funcs.askQuestion();
  const response = await funcs.getQuestionsAdmin();
  const answeredQuestion = await funcs.answerQuestion(
    response.data.data[0]._id
  );
  const response1 = await funcs.getQuestions();
  const newQuestion1 = response1.data.data[0];
  expect(newQuestion1.answer).toEqual("nouran");
  expect(newQuestion1._id).toEqual(response.data.data[0]._id);

  done();
});

//test  get the user's answers of his questions
test("It responds with the answered questions", async done => {
  const newQuestion = await axios.post(
    "http://localhost:3000/api/Questions/ask",
    {
      question: "dsjk are djsk",
      user: "dskjflkdf"
    }
  );
  const answeredQuestion = await funcs.answerQuestion(
    newQuestion.data.data._id
  );
  const response = await funcs.getAnswers();
  var i;
  for (i = 0; i < response.data.data.length; i++) {
    expect(response.data.data[i].user).toEqual("dskjflkdf");
  }
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

test("Creating a new club adds it to the database", async done => {
  const allClubs = await functions.getAllClubs();
  const databaseSize = allClubs.data.data.length;
  const club = { name: "Nebny", description: "mesh charity bas ya3nii" };
  const newClub = await functions.createClub(club);
  const allClubsUpdated = await functions.getAllClubs();
  var i;
  var b = false;
  for (i = 0; i < allClubsUpdated.data.data.length; i++) {
    if (
      allClubsUpdated.data.data[i].name === club.name &&
      allClubsUpdated.data.data[i].description === club.description
    )
      b = true;
  }
  expect(b).toBeTruthy();
  expect(allClubsUpdated.data.data.length).toBe(allClubs.data.data.length + 1);
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
  const deletedClub = await functions.deleteClub(id);
  const allClubsUpdated = await functions.getAllClubs();
  var i;
  var b = true;
  for (i = 0; i < allClubsUpdated.data.data.length; i++) {
    if (allClubsUpdated.data.data[i]._id === id) b = false;
  }
  expect(b).toBeTruthy();
  done();
});
