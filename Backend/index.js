import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookroute from "./route/book.route.js"
import cors from "cors";
import userroute from "./route/user.route.js"


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())


const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("MongoDB connection error:", error));


//define rpute

app.use("/book",bookroute);
console.log("User route is registered ✅");
app.use("/user", userroute);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
