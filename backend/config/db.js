import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.PG_URI,
});

pool.on('connect', () => {
    console.log('📦 PostgreSQL verbunden');
});

export default pool;