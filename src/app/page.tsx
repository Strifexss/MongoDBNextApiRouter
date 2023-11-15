"use client"
import {Formulario} from "./components/Formulario/index";
import {useForm, SubmitHandler} from "react-hook-form"
import axios from "axios";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  Email: z.string().email("Por favor, insira um Email válido"),
  Password: z.string().min(6, "Insira uma Senha com no minimo 5 digitos")
})

export default function Home() {

  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      Email: "",
      Password: ""
    }
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {

    const Email = data.Email
    const Password = data.Password
    
    axios.post("/api/hello", {
      Email: Email,
      Password: Password
    })
    .then(result => {
      console.log(result)
    })
    .catch(error => 
      console.log(error))
  } 

  return(
    <div className='w-screen h-screen flex justify-center items-center bg-black p-2'>
      <Formulario.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Formulario.FormuarioInput Type="text" PlaceHolder="Insira o seu Email" register={register("Email")}/>
        {errors.Email && 
        <p className="text-red-600">{errors.Email.message}</p>
          }
        <Formulario.FormuarioInput Type="password" PlaceHolder="Insira a sua Senha" register={register("Password", {required: true})}/>
        {errors.Password && 
        <p className="text-red-600">{errors.Password.message}</p>
          }
        <Formulario.ButtonForm conteudo="Logar"/>
      </Formulario.Wrapper>
    </div>
  )
}
