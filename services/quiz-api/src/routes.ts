import { Router } from "express";
import db from "./db";

const router = Router();

// Alle Quizfragen eines Standorts (z. B. lab1, lab2, lab3)
router.get("/quiz/:location", (req, res) => {
  const location = req.params.location;

  const stmt = db.prepare("SELECT * FROM quizzes WHERE location = ?");
  const questions = stmt.all(location);

  if (questions.length === 0) {
    return res.status(404).json({ error: "No quiz found for this location" });
  }

  res.json({ location, questions });
});

export default router;
