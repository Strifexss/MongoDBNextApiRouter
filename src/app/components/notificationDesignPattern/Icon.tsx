import { ElementType } from "react"

interface Props {
    Icon: ElementType
}
export default function Icon({Icon: Icone}: Props) {
    return(
        <Icone color="white" className="w-[3rem] h-[3rem]"/>
    )
}