import React from "react";

const Produto = ({imagem, titulo, preco, id}) => {

    return (
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col">
            <img src={imagem} className="shadow-lg"/>
            <p className="text-center text-xl font-semibold pt-5">{titulo}</p>
            <p className="text-center text-2xl font-bold text-[#6319C4] p-5">R$ {preco}</p>
            <button id={id} className="bg-[#F5A53B] py-3 px-8 rounded-lg font-bold text-white hover:bg-[#6319C4]">Comprar</button>
        </div>
    );
}

export default Produto; 