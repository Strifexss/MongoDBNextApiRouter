interface Props {
    children: React.ReactNode,
    onSubmit: () => void
}

export default function Wrapper({children, onSubmit}:Props) {

    return(
        <form onSubmit={onSubmit} 
        className="w-[25rem] h-auto p-6 bg-zinc-900 flex flex-col gap-2 rounded-md">
            {children}
        </form>
    )
}