'use client';
import React from "react";

const Produto = ({imagem, titulo, preco, id}) => {

    const enviarMensagem = (chave, titulo, preco) => {
        const numero = '5519996169316'; // Número de telefone (com o código do país, sem o sinal de "+")
        const mensagem = `Olá, tudo bem?, estou interessado(a) no produto ${titulo}, no valor de R$ ${preco}`; // Mensagem que será enviada
    
        // Formatar a mensagem para que seja uma URL válida
        const mensagemFormatada = encodeURIComponent(mensagem);
    
        // Verificar se estamos no navegador
        if (typeof window !== 'undefined') {
          // Montar o link com o número de telefone e a mensagem
          const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;
    
          // Abrir a página do WhatsApp no navegador com a mensagem preenchida
          window.open(url, "_blank");
        }

        //console.log("O produto escolhido foi: " + chave)

    }

    return (
        <div className="bg-white dark:bg-[#1F1B24]  p-4 rounded-lg flex flex-col">
            <img src={imagem} className="shadow-lg dark:bg-[#ebebeb]"/>
            <p className="text-center text-lg font-semibold pt-5 dark:text-[#ebebeb]">{titulo}</p>
            <p className="text-center text-2xl text-[#313131] p-5 dark:text-[#ebebeb]">R$ {preco}</p>
            <button onClick={() => enviarMensagem(id, titulo, preco)} className="bg-[#F5A53B] py-3 px-8 rounded-lg font-bold text-white hover:bg-[#6319C4]">Comprar</button>
        </div>
    );
}

export default Produto; 