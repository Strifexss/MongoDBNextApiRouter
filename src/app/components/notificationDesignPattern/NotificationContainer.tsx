interface Props {
    children: React.ReactNode,
    BackgroundColor: "Cinza" | "Vermelho"
}

export default function NotificationContainer({BackgroundColor, children}:Props) {
    return(
        <div className={`w-full h-[5rem] ${BackgroundColor === "Cinza" ? "bg-gray-700" : "bg-red-600"} flex items-center justify-between p-8`}>
            {children}
        </div>
    )
}