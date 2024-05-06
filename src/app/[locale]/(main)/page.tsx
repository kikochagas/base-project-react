"use client"

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";


export default function Home() {

 const {name, email} = useContext<any>(AuthContext);
  return (
    <>
    <h3>Olá {name}</h3>
      {/* <Image
            src="https://img.freepik.com/fotos-gratis/feche-detalhes-da-equipe-trabalhando-o-novo-projeto-no-espaco-de-coworking-escrevendo-ideias-olhando-atraves-de-graficos-no-tablet-e-laptop-trabalho-em-equipe-conceito-do-negocio_176420-8307.jpg"
            alt="Imagem"
            height={200}
            width={200}
          /> */}
    </>
  );
}
