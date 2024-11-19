const mongoose = require('mongoose')

const ConnectDB = async () => {
    try {
        const Conn = await mongoose.connect(process.env.DB);
        console.log('Connected to MongoDB');
        return Conn;
    } catch(error){
        console.log("Error Connecting Mongo DB" ,error);
        process.exit(1);
    }
};
module.exports = ConnectDB;