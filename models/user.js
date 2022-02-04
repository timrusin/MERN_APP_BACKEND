// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 2 properties, and assign it to a variable
const userSchema = new mongoose.Schema({
	name: String,
    email: String,
});

// instantiate the model, calling it "Bookmark" and with the schema we just made
const User = mongoose.model('user', userSchema);

// export the newly created model
module.exports = User;