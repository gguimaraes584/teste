import { Container } from "./styled";
import { Titulo } from "../../components/titulo/styled";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from "../../service/api";
import { useState} from "react";

const api = new Api();

export default function CadastrarProduto () {
    
    const [ nome, setNome ] = useState ('');
    const [ preco, setPreco ] = useState (0);
    const [ sexo, setSexo ] = useState ('');
    const [ categoria, setCategoria ] = useState ('');
    const [ tamanho, setTamanho ] = useState (0);
    const [ img, setImg] = useState ('');
    const [ desc, setDesc ] = useState ('')

    async function inserir() {
        if (nome !=='' && preco > 0 && categoria !=='' && img !=='' && desc !=='' && tamanho > 0 && tamanho < 26 || tamanho > 25 && tamanho < 34 )
            {
                let r = await api.inserir(nome, desc, categoria, preco, tamanho, img);
                if (r.erro)
                    toast.dark('Erro')
                else
                    toast.dark('Produto Inserido')
        } else {
            toast.dark('Campos Inválidos')
        }
        limparCampos();
    }

    function limparCampos () {
        setNome('')
        setPreco('')
        setCategoria('')
        setTamanho(0)
        setImg('');
        setDesc('');
    }

    return (
        <Container>
            <ToastContainer/>
            <div className="container">
            <Titulo>ADICIONAR PRODUTO</Titulo>
                <div className="box-cadastro">
                            
                            <div className="box-info">

                                    <div className="dados">
                                        <div className="nome">
                                            NOME DO PRODUTO:
                                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                                        </div>

                                        <div className="preco">
                                            PREÇO DO PRODUTO
                                            <input type="text" value={preco} onChange={e => setPreco(e.target.value)} />
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
                                            <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                                        </div>

                                        <div className="cores">
                                            TAMANHOS:
                                            <input type="text" value={tamanho} onChange={e => setTamanho(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="link">
                                        IMAGEM DO PRODUTO:
                                        <input type="text" value={img} onChange={e => setImg(e.target.value)}/>
                                    </div>

                                    <div className="descricao">
                                        DESCRIÇÃO:
                                        <textarea value={desc} onChange={e => setDesc(e.target.value)}/>
                                    </div>
                            </div>

                            <div className="box-acoes">
                                <div className="imagem">
                                    <img src="/assets/images/calcado.svg" alt=""/>
                                </div>

                                <div className="cadastrar">
                                    <button onClick={inserir}>
                                        <span >CADASTRAR</span>
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