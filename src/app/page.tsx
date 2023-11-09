import Formulario from "./components/Formulario";
import NotificaitonMain from "./components/notificationDesignPattern/Main";

export default function Home() {

  const data = [
    {
      nome: "Matheus",
      texto: "Testeeee"
    },
    {
      nome: "Henrique",
      texto: "teste 2 "
    }
  ]

  return(
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <NotificaitonMain data={data} />
    </div>
  )
}
