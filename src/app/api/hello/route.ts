import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
    const uri = "mongodb+srv://matheus:matheus@meucluster.g7yg4dx.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("Games");
        const query = db.collection("ListaDeJogos");
        const resultado = await query.find().toArray(); 

        return NextResponse.json({ data: resultado });
    } catch (error) {
        return NextResponse.json({ error: "Ocorreu um erro ao acessar o banco de dados." }, { status: 500 });
    } finally {
        await client.close();
    }
}