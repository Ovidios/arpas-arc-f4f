import db from "./db";

db.exec(`
  DROP TABLE IF EXISTS quizzes;

  CREATE TABLE quizzes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,s    location TEXT NOT NULL,
    question TEXT NOT NULL,
    optionA TEXT NOT NULL,
    optionB TEXT NOT NULL,
    optionC TEXT NOT NULL,
    correctOption TEXT NOT NULL
  );
`);

const insert = db.prepare(`
  INSERT INTO quizzes (location, question, optionA, optionB, optionC, correctOption)
  VALUES (?, ?, ?, ?, ?, ?)
`);

insert.run("lab1", "Was wächst im Vertical Farming?", "Kartoffeln", "Salat", "Mais", "B");
insert.run("lab1", "Womit werden Pflanzen beleuchtet?", "LED", "Kerzen", "Laser", "A");
insert.run("lab2", "Was ist Insektenprotein?", "Nachhaltig", "Giftig", "Unbekannt", "A");

console.log("Seeding done!");
