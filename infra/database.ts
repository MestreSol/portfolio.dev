import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
});

async function query(query: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(query, params);
    return res;
  } finally {
    client.release();
  }
}

async function information() {
  const res = await query('SELECT * FROM pg_catalog.pg_tables');
  return res.rows;
}

async function getVersion() {
  const res = await query('SELECT version()');
  return res.rows;
}

async function getAllInformations() {
  const res = await query('SELECT * FROM pg_stat_database WHERE datname = $1', [process.env.POSTGRES_DB]);
  return res.rows;
}

export { information, getVersion, getAllInformations };
