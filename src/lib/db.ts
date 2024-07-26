import mysql, { QueryResult } from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(<string>process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 3,
  maxIdle: 3,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export default async function excuteSqlQuery(query: string): Promise<QueryResult> {
  try {
    const [result, rows] = await pool.query(query);
    console.log(`QUERY EXECUTED: ${query}`, result);
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
}