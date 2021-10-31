import {Container} from './styled';
import Cabecalho from '../../../components/cabecalho/index';
import { Button } from '../../../components/button/styled';

export default function Pagamento () {
    return (
        <Container>

                <Cabecalho/>

                <h1 className="titulo-pagina">COMO VOCÊ PREFERE PAGAR?</h1>
       
            <div className="box-container">

                <div className="container-pagamento">

                    <div className="Cartão">
                        <div className="imagem">
                        <input type="radio"/>
                        <img src="/assets/images/mastercard.svg" alt=""/>
                            CARTÃO MASTERCARD
                        </div>
                    </div>

                    <hr/>

                    <div className="Cartão">
                        <div className="imagem">
                        <input type="radio"/>
                        <img src="/assets/images/elo.png" alt=""/>
                            CARTÃO CIELO
                        </div>
                    </div>

                    <hr/>

                    <div className="Cartão">
                        <div className="imagem">
                        <input type="radio"/>
                        <img src="/assets/images/pix.svg" alt=""/>
                            PIX
                        </div>
                    </div>

                    <hr/>

                    <div className="Cartão">
                        <div className="imagem">
                        <input type="radio"/>
                        <img src="/assets/images/cartão.png" alt=""/>
                            ADICIONAR UM NOVO CARTÃO
                        </div>
                    </div>

                    <hr/>

                    <div className="Cartão">
                        <div className="imagem">
                        <input type="radio"/>
                        <img src="/assets/images/boleto.svg" alt=""/>
                            BOLETO BANCÁRIO
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