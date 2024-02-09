const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const connectDB = require("./config/db");

connectDB();

app.listen(process.env.PORT, () =>
    console.log(`server is up and running at port ${process.env.PORT}`)
);
