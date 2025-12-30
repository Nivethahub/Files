const mongoose = require('mongoose');
const db = async () => {
    try {
        const mongoUri = "mongodb://adminForever:Pass%402025%40admin@127.0.0.1:27017/fingerprint?authSource=admin" || "";
        // console.log("mongoUri: ", mongoUri);
        // console.log("DB_Username: ", process.env.DB_Username);
        // console.log("process.env.DB_Password: ", process.env.DB_Password);
        const options = {
            authSource: "admin",
            user: "adminForever",
            pass: "Pass%402025%40admin",
        };
        await mongoose.connect(mongoUri, );
        // await mongoose.connect('mongodb://mongo/MLS');
        console.log("Connected to db");
    } catch (error) {
        console.error("Error connecting to DB:", error.message);
    }
};

module.exports = db;
