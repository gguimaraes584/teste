import { Container } from "../produtos-femininos/styled";
import Cabecalho from "../../../components/cabecalho";
import { useState, useEffect, useRef } from "react";
import Produto from "../produto-compo";
import Api from "../../../service/api";
import Paginas from "../paginacao/index";
import LoadingBar from 'react-top-loading-bar';

const api = new Api();


export default function Feminino(){

  const [produto, setProduto] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const loading = useRef(null); 

  function irPara(pagina) {
    setPagina(pagina);
  }

  useEffect(() => { 
    const listar = async() => {
      const produtosr = await api.listar(pagina, 'Feminina');
      loading.current.complete();
      setProduto(produtosr.items);
      setTotalPaginas(produtosr.totalPaginas);
    }
    listar();
  },
  [pagina])
  
  return(
    <Container>
        <Cabecalho/>
        <LoadingBar color="#ff2ded" ref={loading} />
        <div class="titulo-pagina">PRODUTOS FEMININOS</div>

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
        <Produto info={item}/>
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
  )

}