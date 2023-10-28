import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2";
import { queryDatabase } from "../db";
export async function GET() {
    try {

        const resultado = await queryDatabase("select * from teste;"); 

        return NextResponse.json({ data: resultado });
    } catch (error) {
        return NextResponse.json({ error: "Ocorreu um erro ao acessar o banco de dados." }, { status: 500 });
    }
}