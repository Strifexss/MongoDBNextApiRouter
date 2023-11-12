import { User2 } from "lucide-react"
import { Notification } from "."

interface data {
    nome: string,
    texto: string
}

interface dataNotification {
    data: data[]
}

export default function NotificaitonMain({data}:dataNotification) {

    console.log(data)

    return(
        <Notification.Wrapper>
          {
            data.map(x => {
                return(
                <Notification.Container key={x.nome} BackgroundColor="Cinza">
                    <Notification.Icon Icon={User2} />
                    <div className="w-full h-full flex flex-col justify-center items-start gap-y-2 m-2">
                        <h1 className="text-white font-semibold">
                            {x.nome}
                        </h1>
                        <h1 className="text-gray-600 font-semibold">
                            {x.texto}
                        </h1>
                    </div>
                </Notification.Container>
                )      
            })
          }
                <Notification.Container BackgroundColor="Cinza">
                    <Notification.Icon Icon={User2} />
                    <Notification.Icon Icon={User2} />
                    <Notification.Icon Icon={User2} />
                    <Notification.Icon Icon={User2} />
                    <Notification.Icon Icon={User2} />
                </Notification.Container>
        </Notification.Wrapper>
    )
}