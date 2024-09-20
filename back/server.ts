import express, { Request, Response } from "express";
import cors from "cors";
import { staticDB, dynamicDB } from "./data";

const db = dynamicDB;

// Create Express app
const app = express();

app.use(express.json());

app.use(cors());

// API endpoint for schedules

app.get("/schedules", (req: Request, res: Response) => {
  // TODO: Implement scheduling algorithm to match worker availability with customer preferences
  // Each appointment is exactly 1 hour long, and one address needs to be visited only once a month by any worker.

  res.json(null);
});

app.get("/workers", (req: Request, res: Response) => {
  res.json(Array.from(new Set(db.workers.map((w) => w.workerId))));
});

app.get("/data", (req: Request, res: Response) => {
  res.json(db);
});

// Start server
const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
