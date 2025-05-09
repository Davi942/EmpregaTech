const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "postgres", // Nome do banco de dados (geralmente "postgres" no Supabase)
    "postgres", // Usuário do banco (geralmente "postgres" no Supabase)
    "[Doris123!]", // Senha do banco de dados
    {
        host: "db.gudngldxnlftrfqndoor.supabase.co", // Host fornecido pelo Supabase
        dialect: "postgres", // Dialeto para PostgreSQL
        port: 5432, // Porta padrão do PostgreSQL
        logging: false, // Desativa logs de SQL (opcional)
        ssl: {
            require: true, // Exige SSL para conexão segura
            rejectUnauthorized: false, // Permite certificados autoassinados
        },
    }
);

module.exports = sequelize;