const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect(process.env.MONGOOSE_URL)
        .then(() => console.log("MongoDB Connected!"))
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
};

module.exports = connectDB;
