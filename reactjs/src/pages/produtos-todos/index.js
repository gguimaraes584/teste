import Cabecalho from "../../components/cabecalho";
import { Container } from "./styled";
import { useState, useEffect } from "react";

import Api from "../../service/api";
const api = new Api();

export default function ProdutosTodos() {

  const [produto, setProduto] = useState([]); 

  const listar = async() => {
    const produtosr = await api.listar();
    setProduto(produtosr);
    console.log(setProduto)
  }

  useEffect(() => { 
    listar();
  },
  [])

  return ( 
    <Container>
      <Cabecalho />
      <button onClick={listar}>atualizar</button>
      <div class="titulo-pagina">TODOS OS PRODUTOS</div>

      <div class="classificar-container">
        <div class="classificar">
          <select id="classificar">
            <option value="class1">Classificar por</option>
            <option value="class1">Mais relevantes</option>
            <option value="class2">Menor preço</option>
            <option value="class3">Maior preço</option>
          </select>
        </div>

        <div class="classificar2">
          <select id="classificar">
            <option value="class1">Gênero</option>
            <option value="class1">Feminino</option>
            <option value="class2">Masculino</option>
            <option value="class3">Lançamento</option>
            <option value="class4">Infantil</option>
          </select>
        </div>
      </div>

      <div class="container-produto">
        <div class="box">
          {produto.map((item) =>
            <div class="prod">
                <img src={item.infoa_dtn_tb_produto.img_imagem} alt=''/> 
                <div class="nome-produto">{item.infoa_dtn_tb_produto.nm_produto}</div>
                <div class="valor">{item.infoa_dtn_tb_produto.vl_preco}</div>
                <div class="parcelamento">ou 7x de R$ 45,00</div>
                <div class="adc-carrinho">
                <button> Adicionar ao carrinho </button>
                </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
