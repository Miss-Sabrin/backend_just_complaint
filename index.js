import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import route from "./routes/route.js";
const PORT = 9000;
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
app.use((req, res, next) => {
  // console.log(req.headers);
  next(); // Call next to pass control to the next middleware function in the stack
});
const connectDB = async () => {
  try {
   // await mongoose.connect("mongodb://127.0.0.1:27017/CompliantSSS");
    await mongoose.connect(process.env.DB_Connection);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("something went wrong");
  }
};
connectDB();
app.use("/api", route);
app.listen(PORT);
