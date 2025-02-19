import { Pool } from 'pg';

// Configuração do pool de conexões com o banco de dados PostgreSQL
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
});

// Função genérica para executar consultas no banco de dados
async function query(query: string, params?: any[]) {
  const client = await pool.connect(); // Obtém uma conexão do pool
  try {
    const res = await client.query(query, params); // Executa a consulta com os parâmetros fornecidos
    return res;
  } finally {
    client.release(); // Libera a conexão de volta para o pool
  }
}

// Função para obter informações sobre as tabelas do banco de dados
async function information() {
  const res = await query('SELECT * FROM pg_catalog.pg_tables');
  return res.rows;
}

// Função para obter a versão do banco de dados
async function getVersion() {
  const res = await query('SELECT version()');
  return res.rows;
}

// Função para obter todas as informações do banco de dados específico
async function getAllInformations() {
  const res = await query('SELECT * FROM pg_stat_database WHERE datname = $1', [process.env.POSTGRES_DB]);
  return res.rows;
}

// Exporta as funções para serem utilizadas em outras partes da aplicação
export { information, getVersion, getAllInformations };
