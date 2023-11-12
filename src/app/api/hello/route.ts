import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { queryListaDeJogos } from "../db";
import { config } from "dotenv";

config()

const client = new MongoClient(process.env.URI || "");

export async function GET() {

    try {
        await client.connect()
        const resultado = await queryListaDeJogos.find().toArray(); 
        return NextResponse.json({ data: resultado });
    } catch (error) {
        return NextResponse.json({ error: "Ocorreu um erro ao acessar o banco de dados." }, { status: 500 });
    } finally {
        await client.close();
    }
}

export async function POST(req: NextRequest) {
    
    const body = await req.text()
    const parsedBody = await JSON.parse(body)
    const {Email, Password} = parsedBody

    try {
        queryListaDeJogos.insertOne({Email: Email, Password: Password})

        return NextResponse.json({message: "Email adicionado com sucesso"})
    }
    catch(error) {
        return NextResponse.json({message: "Ocorreu um erro ao processar a requisicao"})
    }
    finally {
        client.close()
    }

}