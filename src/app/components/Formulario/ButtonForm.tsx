interface Props {
  conteudo: string
}

export default function ButtonForm({conteudo}:Props) {
    return(
        <button className="w-full h-[2rem] bg-emerald-600 rounded-md text-white font-semibold">
            {conteudo}
        </button>
        )
}