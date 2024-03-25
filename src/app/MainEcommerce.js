import React from "react";
import Produto from "../components/Produtos";
//import CarouselProdutos from "../../components/CarouselProdutos";

const MainEcommerce = () => {

    const produtos = [
        {imagem: "/imagens/roupas.png", titulo: "Produto 1", preco: "59,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 2", preco: "119,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 3", preco: "39,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 4", preco: "89,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 5", preco: "79,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 6", preco: "99,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 7", preco: "99,90"}
    ];

    return (
        <div className="font-sans container py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-[600px]:w-15">
            <h1 className="text-3xl font-bold mb-4">Nossos Produtos</h1>
            <div className="grid grid-cols-6 gap-4 max-[1000px]:flex max-[600px]:flex-col">
                
                {produtos.map((produto, index) => (
                    <Produto key={index} id={index} {...produto} />
                ))}

            </div>
        </div>
    );
}

export default MainEcommerce;