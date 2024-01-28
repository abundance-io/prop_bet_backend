import { PrismaClient } from "@prisma/client";
import cors from "cors";
const prisma = new PrismaClient();
import { sportsMap, getSportEvents, sportsKey } from "./utils";
import express from "express";

const app = express();
app.use(cors());

app.get("/sports", (req, res) => {
  res.json({ sports: Object.keys(sportsMap) });
});

app.get("/sports/:name", async (req, res) => {
  const sportName = req.params["name"] as sportsKey;
  const events = await getSportEvents(sportName);
  res.json(events);
});

const server = app.listen(4000, () => {
  console.log("listening on port 4000");
});
