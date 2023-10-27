import mysql, { Connection } from "mysql2";

let connection: Connection | null = null;

export const connectToDatabase = (databaseUrl: string) => {
  connection = mysql.createConnection(databaseUrl);
  connection.connect();
};

export const closeDatabaseConnection = () => {
  if (connection) {
    connection.end();
  }
};

export const queryDatabase = async (query: string) => {
  try {
    if (!connection) {
      throw new Error("A conexão com o banco de dados não foi estabelecida.");
    }

    const resultado = await connection.promise().query(query);
    return resultado[0];
  } catch (error) {
    throw new Error("Ocorreu um erro ao consultar o banco de dados.");
  }
};