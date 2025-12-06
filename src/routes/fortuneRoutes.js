import express from "express";

const fortuneRoutes = express.Router();

fortuneRoutes.get("/all", (req, res) => {
    res.send("aqaa yvela teqnika");
});

fortuneRoutes.get("/random", (req, res) => {
    res.send("random fortune");
});

fortuneRoutes.post("/save", (req, res) => {
    res.send("fortune saved");
});



export default fortuneRoutes;