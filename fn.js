const axios = require('axios');

functions = {

    getUsers: async()=>{
        const Users = await axios.get('http://localhost:3000/api/Users')
        return Users
    },
    getUserByIdFound : async()=>{
        const user =  User.findOne()
        const userId = user._id
        const userFound = await axios.get('http://localhost:3000/api/Users/'+userId)
        return userFound
    },
    getAllClubs : async () => {
        const clubs = await axios.get('http://localhost:3000/api/Clubs');
        return clubs;
    },
    createContent : async content => {
        const newContent = await axios.post('http://localhost:3000/api/Contents', content);
        return newContent;
    },
    updateContent : async (id, updatedData) => {
        const updatedContent = await axios.put(`http://localhost:3000/api/Contents/${id}`, updatedData);
        return updatedContent;
    },
    deleteContent : async id => {
        const deletedContent = await axios.delete(`http://localhost:3000/api/Contents/${id}`);
        return deletedContent;
    }


}

module.exports = functions;