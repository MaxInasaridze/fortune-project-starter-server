import express from "express";
import cors from "cors";
import fortuneRoutes from "./routes/fortuneRoutes.js";
import mongoose from "mongoose"

const app = express();


app.use(cors({
    origin: "*",
}));    

async function connectDB() {
    try{
        await mongoose.connect("test misamarti");
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1);
    }   
    
}

app.use(express.json());


app.get("/teqnika", (req, res) => {
    
    res.send("teqnikaa aqa ")
});

app.use("/api/fortune", fortuneRoutes);



app.listen(4000, ()=> console.log("magazia gaxsnilia ofishi nomerad 4000"))


