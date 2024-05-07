const mongoose = require('mongoose');
require('dotenv').config();

// console.log(process.env.ATLASPASS);

module.exports = () => {

    return mongoose.connect(`mongodb+srv://Iae:N9fKwvkVltCgMvcd@iae.twztpms.mongodb.net/?retryWrites=true&w=majority&appName=Iae`);
}