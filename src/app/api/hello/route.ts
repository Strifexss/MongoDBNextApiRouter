import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Importe a classe ObjectId
import client from "../mongoDB";

export async function GET() {
  try {
      await client.connect(); // Conecta ao servidor MongoDB

      const database = client.db("Games"); // Escolhe o banco de dados (no seu caso, "test")
      const collection = database.collection("ListaDeJogos"); // Escolhe a coleção (substitua "usuarios" pelo nome da sua coleção)

      const result = await collection.find({}).toArray(); // Realiza a consulta para obter todos os documentos

      return NextResponse.json({result}); // Retorna os documentos como JSON
  } catch (error) {
      console.error("Erro ao processar a requisição:", error);
      return NextResponse.json({ error: "Ocorreu um erro ao processar a requisição." }, { status: 500 });
  } finally {
      await client.close(); // Fecha a conexão ao final
  }
}