import mysql from 'mysql2/promise';

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

export default async function excuteSqlQuery(query: string) {
  console.log('QUERYING DB', query);
  try {
    const [rows, fields] = await pool.query(query);
    console.log('GOT DATA FROM DB', [rows, fields]);
  } catch (err) {
    console.error(err);
  }
}