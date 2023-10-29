import { error } from "console";
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://matheus:matheus@meucluster.g7yg4dx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

   client.connect()
   const db = client.db("Games");
  const queryListaDeJogos = db.collection("ListaDeJogos");



export {queryListaDeJogos}