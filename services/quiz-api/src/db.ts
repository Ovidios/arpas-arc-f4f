/**
 * db.ts
 * Verbindung zu SQLite (better-sqlite3)
 * Wir verwenden require() / CommonJS-Import um TS-Typ-Probleme zu vermeiden.
 */
import path from 'path';
const Database = require('better-sqlite3');

const DB_PATH = path.resolve(__dirname, '../data/quiz.db');
const db = new Database(DB_PATH);

// enable foreign keys (safe)
db.pragma('foreign_keys = ON');

export default db;
