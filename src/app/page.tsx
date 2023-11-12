"use client"
import {Formulario} from "./components/Formulario/index";
import {useForm, SubmitHandler} from "react-hook-form"
import axios from "axios";

interface FormData {
  Email: string,
  Password: string,
}

export default function Home() {

  const {register, handleSubmit} = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {

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
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
      <Formulario.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Formulario.FormuarioInput Type="text" PlaceHolder="Insira o seu Email" register={register("Email")}/>
        <Formulario.FormuarioInput Type="password" PlaceHolder="Insira a sua Senha" register={register("Password", {required: true})}/>
        <Formulario.ButtonForm conteudo="Logar"/>
      </Formulario.Wrapper>
    </div>
  )
}
