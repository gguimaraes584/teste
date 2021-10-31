import {Container} from './styled';
import { Button } from '../../../components/button/styled';
import Cabecalho from '../../../components/cabecalho';

export default function Parcelamento () {
    return (
        <Container>
                <Cabecalho/>

                <h1 className="titulo-pagina">EM QUANTAS VEZES VOCÊ QUER PARCELAR?</h1>

                <div className="box-container"> 

                    <div className="box-p-b"> 
                        
                        <div className="box-parcelas">
                            <div className="container-parcelamento">
                                <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div class="opcao">
                                            <input type="radio"/>
                                        1x de 179,99
                                        </div>
                                
                                    </div>
                                    </div>
                            <hr/>

                            <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div className="opcao">
                                            <input type="radio"/>
                                        2x de 89,99
                                        </div>
                                
                                    </div>
                            </div>
                            
                            <hr/>

                            <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div className="opcao">
                                            <input type="radio"/>
                                        3x de 59,99
                                        </div>
                                
                                    </div>
                            </div>
                                
                            <hr/>

                            <div className="box-parcelamento">
                                    <div class="parcela">
                                        <div class="opcao">
                                            <input type="radio"/>
                                        4x de 49,99
                                        </div>
                                
                                    </div>
                            </div>
                        

                        <hr/>

                            <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div className="opcao">
                                            <input type="radio"/>
                                        5x de 35,99
                                        </div>
                                
                                    </div>
                            </div>

                            <hr/>

                            <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div className="opcao">
                                            <input type="radio"/>
                                        6x de 29,99
                                        </div>
                                
                                    </div>
                            </div>

                            <hr/>

                            <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div className="opcao">
                                            <input type="radio"/>
                                        7x de 25,71
                                        </div>
                                
                                    </div>
                            </div>

                            <hr/>

                            <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div className="opcao">
                                            <input type="radio"/>
                                        8x de 22,49
                                        </div>
                                
                                    </div>
                            </div>

                            <hr/>

                            <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div className="opcao">
                                            <input type="radio"/>
                                        9x de 19,99
                                        </div>
                                
                                    </div>
                            </div>

                            <hr/>

                            <div className="box-parcelamento">
                                    <div className="parcela">
                                        <div className="opcao">
                                            <input type="radio"/>
                                        10x de 17,99
                                        </div>
                                
                                    </div>
                            </div>
                    </div>
                </div>
                    
                    <div className="a">
                            <div className="botao">
                                <Button>CONTINUAR</Button>
                            </div>
                    </div>
                    
                    </div>
                
                    <div className="box-pedido">

                        <div className="pedido-desc">
                        
                        <div className="desc">
                            <div className="pedido-imagem">
                                <img src="/assets/images/camisa_corinthians.svg" alt=""/>
                            </div>

                            <div className="info">
                                <h1 className="titulo-produto"> Camisa Corinthians II 21/22 s/n° Estádio Nike Masculina </h1>
                                
                                <div className="c-t">
                                    <div className="cor">
                                        
                                        COR: <span> Preto e Branco</span></div>
                                    <div className="tamanho">
                                        TAMANHO:<span> G </span>
                                    </div>
                                </div>

                                    <hr className="hr2"/>

                                    <div className="f-p">
                                        <div className="preco-produto">
                                            PREÇO DO PRODUTO: <span className="preco">R$179,99</span>
                                        </div>

                                        <div className="frete">
                                            FRETE: <span className="frete2">14,99</span>
                                        </div>
                                    </div>
                                
                                    <hr className="hr2"/>
                                

                                <div className="total">
                                    VOCÊ PAGARÁ: <span className="total2">R$194,98</span>
                                </div>

                            </div>
                            <div className="botao">
                                <Button>ADICIONAR CUPOM</Button>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
        </Container>
    )
}