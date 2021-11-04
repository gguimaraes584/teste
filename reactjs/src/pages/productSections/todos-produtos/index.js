import Cabecalho from "../../../components/cabecalho";
import { Container } from "../produtos-femininos/styled";
import { useState, useEffect } from "react";

import Api from "../../../service/api";
import Paginas from "../paginacao";

const api = new Api();

export default function ProdutosTodos() {

  const [produto, setProduto] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);

  const listar = async() => {
    const produtosr = await api.listarTodos(pagina);
    setProduto(produtosr.items);
    setTotalPaginas(produtosr.totalPaginas);
  }

  function irPara(pagina) {
    setPagina(pagina);
  }

  useEffect(() => { 
    listar();
  },
  [pagina])

  return ( 
    <Container>
      <Cabecalho />
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
        {produto.map((item) =>
          <div class="box">       
            <div class="prod">
                <img src={item.img_imagem} alt=''/> 
                <div class="nome-produto">{item.nm_produto}</div>
                <div class="valor">{item.vl_preco}</div>
                <div class="parcelamento">ou 7x de R$ 45,00</div>
                <div class="adc-carrinho">
                  <button> Adicionar ao carrinho </button>
                </div>
            </div>
          </div>
        )}
      </div>
      <div class="paginacao">
        <Paginas 
            totalPaginas={totalPaginas} 
            pagina={pagina}
            onPageChange={irPara}
          />
      </div>
    </Container>
  );
}
