import { UseFormRegisterReturn } from "react-hook-form"

interface Props {
    Type: string,
    PlaceHolder: string,
    register: UseFormRegisterReturn
}

export default function FormuarioInput({PlaceHolder, Type,  register}:Props) {
    return(
            <input  
            {...register}
            className="w-full p-2 bg-zinc-800 border-zinc-700 text-white rounded-md"
            type={Type}
            placeholder={PlaceHolder}
              />
        )
}