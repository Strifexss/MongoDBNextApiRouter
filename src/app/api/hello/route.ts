import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2";

export async function GET() {
    try {
        const databaseUrl = process.env.DATABASE_URL;

        if (typeof databaseUrl !== 'string') {
            return NextResponse.json({ error: "DATABASE_URL não é uma string válida." }, { status: 500 });
        }

        const connection = mysql.createConnection(databaseUrl);

         connection.connect(); 

        const resultado = await connection.promise().query("select * from teste;"); // Fazer a consulta

        connection.end(); 

        return NextResponse.json({ data: resultado[0] });
    } catch (error) {
        return NextResponse.json({ error: "Ocorreu um erro ao acessar o banco de dados." }, { status: 500 });
    }
}