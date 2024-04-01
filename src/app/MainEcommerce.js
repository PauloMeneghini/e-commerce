'use client';
import React, { useEffect, useState } from "react";
import Produto from "../components/Produtos";
import axios from "axios";
import { response } from "express";


const MainEcommerce = () => {

    // const [apiData, setApiData] = useState(null)

    // useEffect(() => {
    //     console.log('O useEffect foi chamado')

    //     const fetchData = async () => {
    //         console.log('Iniciando a busca de dados')

    //         try {
    //             const response = await fetch('http://localhost:8000/api/products')
    //             if(!response.ok) {
    //                 throw new Error('Falha ao buscar os dados');
    //             }
    //             const data = await response.json()

    //             console.log('retorno api dentro da função: ' + data)

    //             setApiData(data)

    //             console.log('entrou no try')

    //         } catch (error) {

    //             console.error('Error: ', error.message);

    //         }
    //     }

    //     console.log("entrou no useEffect")

    //     fetchData()
    // }, [])

    /*async function fetchData() {
        try {
            const response = await axios.get('http://localhost:8000/api/products')

            return response.data
        } catch (error) {
            console.error(error)
        }
    }*/

    async function fetchData() {
        try {            
            const resposta = await axios.get('http://localhost:8000/api/products')

            //console.log("API: ", resposta.data)
    
            return resposta.data
    
        } catch (error) {
            console.error(error)
        }
    }
    
    let produtos = fetchData()

    console.log('Produtos: ', produtos)

    // axios.get('http://localhost:8000/api/products')
    // .then(response => {
    //     //console.log(response.data)
    //     produtos = response.data
    //     console.log('responseData dentro do Axios:', produtos);
    // })
    // .catch(error => {
    //     console.error(error)
    // })

    //console.log('Produtos: ' + produtos)

    /*const produtos = [
        {imagem: "/imagens/roupas.png", titulo: "Produto 1", preco: "59,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 2", preco: "119,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 3", preco: "39,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 4", preco: "89,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 5", preco: "79,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 6", preco: "99,90"},
        {imagem: "/imagens/roupas.png", titulo: "Produto 7", preco: "99,90"}
    ];*/

    return (
        <div className="font-sans container py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-[600px]:w-15">
            <h1 className="text-3xl font-bold mb-4">Nossos Produtos</h1>
            <div className="grid grid-cols-6 gap-4 max-[1000px]:flex max-[600px]:flex-col">
                
                {/* {produtos.map((produto, index) => (
                    <Produto key={index} id={index} {...produto} />
                ))} */}

            </div>
        </div>
    );
}

export default MainEcommerce;