const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// In the code snippet above, we have created a basic Express server that listens on port 5000. We have also connected to the MongoDB database using the connectDB function from the config/db.js file. We have also added the necessary middleware for parsing JSON data and enabling CORS.
