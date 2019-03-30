const axios = require('axios');

functions = {

    getClubById : async id => {
        const club = await axios.get(`http://localhost:3000/api/Clubs/${id}`);
        return club;
    },
    getAllClubs : async () => {
        const clubs = await axios.get('http://localhost:3000/api/Clubs');
        return clubs;
    },
    createClub : async club => {
        const newClub = await axios.post('http://localhost:3000/api/Clubs', club);
        return newClub;
    },
    updateClub : async (id,updatedData) => {
        const updatedClub = await axios.put(`http://localhost:3000/api/Clubs/${id}`, updatedData);
        return updatedClub;
    },
    deleteClub : async id => {
        const deletedClub = await axios.delete(`http://localhost:3000/api/Clubs/${id}`);
        return deletedClub;
    }

}

module.exports = functions;