import Cabecalho from "../../../components/cabecalho";
import { Container } from './styled';


export default function Desc() {
    return(
    <Container>
        <Cabecalho/>
        <div className="geral-desc">
        <div class="img-produto"> <img src="assets/images/camisa-sp.jpg" alt=""/> </div>
        <div class="desc-text"> 
                    <div class="nome-produto"> Camisa São Paulo II 21/22 Rigoni Nº 77 </div>
                    <div class="cor">Vermelho, Branco e Preto</div>

                    <div class="valores"> 
                        <div class="preco"> R$ 314,99</div>
                        <div class="parc"> ou 7x de R$ 45,00 </div>
                   </div>
                     <div class="geral-tamanhos"> 
                        <div class="tamanhos"> Tamanhos </div>
                        <div class="opcoes-tamanho"> 
                            <button>P</button>
                            <button>M</button>
                            <button>G</button>
                            <button>GG</button>
                        </div>
                        <div class="geral-carrinho">
                            <button class="adc-carrinho"> ADICIONAR AO CARRINHO </button>
                            <button class="favo">FAVORITOS ♡ </button>
                            <div class="ava"> AVALIAÇÕES    <div class="cora">✰✰✰✰ </div></div>
                        </div>
                    </div>

                    
               </div>

        </div>

        </Container>
    )

        
}