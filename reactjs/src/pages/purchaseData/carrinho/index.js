import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho";
import { Titulo } from "../../../components/titulo/styled";
import Contador from "../../../components/contador/index"
import AproveiteTambém from "./enjoy";

export default function Carrinho () {
    return (
        <Container>
                <Cabecalho/>
                

            <div className="conteudo">
            
                <div class="pedido-desc">
                    <Titulo>MEU CARRINHO</Titulo>

                    <div class="desc">
                        <div class="pedido-imagem">
                            <img src="/assets/images/camisa-sp.jpg" alt=""/>
                        </div>

                        <div class="info">
                            <h1 class="titulo-produto"> Camisa São Paulo II 21/22 Rigoni Nº 77 </h1>
                            <div class="cor">
                                <span>
                                COR:</span>
                                Vermelho, Preto e Branco
                            </div>
                                                
                            <div class="tamanho">
                            <span>
                                TAMANHO:</span> G
                            </div>
                            
                            <div class="vl-preco">
                                R$179,99
                            </div>
                            
                            <div class="presente">
                            <input type="checkbox"/> PARA PRESENTE?
                            </div>

                        </div>


                    </div>

                    <Contador/>

                    <div className="frete">
                        <h1>CALCULAR FRETE</h1>
                        <input type="text"/>
                        <button>CALCULAR</button>
                    </div>

                </div>

                <div className="resumo">
                    <Titulo>RESUMO DA COMPRA</Titulo>
                    <div className="subtotal">
                        SUBTOTAL (1 ITEM)
                        <span>R$179,99</span>
                    </div>

                    <hr/>

                    <div className="desconto">
                        DESCONTO
                        <span>R$0,00</span>
                    </div>

                    <hr/>

                    <div className="total">
                        VALOR TOTAL
                        <span>R$179,99</span>
                    </div>

                    <div className="botoes">
                        <div className="finalizar">
                            <button class="finalizar">FINALIZAR COMPRA</button>
                        </div>

                        <div className="continuar">
                            <button class="continuar">CONTINUAR COMPRANDO</button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="conteudo2">
                <Titulo>APROVEITE TAMBÉM</Titulo>
                <AproveiteTambém/>
            </div>
        </Container>
    )
}