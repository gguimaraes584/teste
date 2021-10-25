import { Container } from "./styled";
import { Titulo } from "../../components/titulo/styled";

export default function CadastrarProduto () {
    return (
        <Container>


            <div className="container">
            <Titulo>ADICIONAR PRODUTO</Titulo>
                <div className="box-cadastro">
                            
                            <div className="box-info">

                                    <div className="dados">
                                        <div className="nome">
                                            NOME DO PRODUTO:
                                            <input type="text"/>
                                        </div>

                                        <div className="preco">
                                            PREÇO DO PRODUTO
                                            <input type="text"/>
                                        </div>
                                    </div>

                                    <div className="opcoes">

                                        <div className="sexo">
                                            SEXO:
                                            <select name="sexo" placeholder="SELECIONE">
                                                <option selected>SELECIONE</option>
                                                <option>FEMININO</option>
                                                <option>MASCULINO</option>
                                            </select>
                                        </div>
                                        <div className="cores">
                                            CORES:
                                            <input type="text"/>
                                        </div>
                                    </div>

                                    <div className="opcoes2">

                                        <div className="categoria">
                                            CATEGORIA:
                                            <select name="sexo" placeholder="SELECIONE">
                                                <option selected>SELECIONE</option>
                                                <option>FEMININO</option>
                                                <option>MASCULINO</option>
                                            </select>
                                        </div>

                                        <div className="cores">
                                            TAMANHOS:
                                            <input type="text"/>
                                        </div>
                                    </div>

                                    <div className="link">
                                        IMAGEM DO PRODUTO:
                                        <input type="text"/>
                                    </div>

                                    <div className="descricao">
                                        DESCRIÇÃO:
                                        <textarea/>
                                    </div>
                            </div>

                            <div className="box-acoes">
                                <div className="imagem">
                                    <img src="/assets/images/calcado.svg" alt=""/>
                                </div>

                                <div className="cadastrar">
                                    <button>
                                        <span>CADASTRAR</span>
                                    </button>
                                </div>

                                <div className="cancelar">
                                    <button>
                                        <span>CANCELAR</span>
                                    </button>
                                </div>

                            </div>
                </div>
            </div>
        </Container>
    )
}