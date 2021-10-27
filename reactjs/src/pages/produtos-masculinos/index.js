import { Container } from "../produtos-femininos/styled";
import Cabecalho from "../../components/cabecalho";
import carrinho from "../carrinho";
import { useState, useEffect } from "react";

import Api from "../../service/api";


const api = new Api();



export default function Masculinos() {

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
      <div class="titulo-pagina">PRODUTOS MASCULINOS</div>

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
        {produto.map((item) =>
          <div class="box">
            <div class="prod">
              <img src={item.infoa_dtn_tb_produto.img_imagem} alt=''/>
            </div>
            <div class="nome-produto">{item.infoa_dtn_tb_produto.nm_produto}</div>
            <div class="valor">{item.infoa_dtn_tb_produto.vl_preco}</div>
            <div class="parcelamento">ou 7x de R$ 45,00</div>
            <div class="adc-carrinho">
              <button onClick={carrinho}> Adicionar ao carrinho </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
