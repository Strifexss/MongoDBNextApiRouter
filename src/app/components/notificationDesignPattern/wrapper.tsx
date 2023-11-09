import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function WrapperNotification({children}: Props) {
    return(
        <div className="w-[30rem] h-[35rem] bg-gray-900 rounded-md">
            {children}
        </div>
    )
}