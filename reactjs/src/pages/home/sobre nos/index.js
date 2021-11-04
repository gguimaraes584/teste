import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";


export default function sobreNos() {
    return(
        <Container>
            <Cabecalho/>
            <div class="faixa-1">
                <div class="titulos">Perfil</div>
                <div class="f1-conteudo">
                    <div class="f1-img">
                        <img src="../assets/images/bolt.jfif" alt=""/>
                    </div>
                    <div class="f1text">
                        <div class="f1textoo">
                            A marca Destiny apesar de sua curta história tem uma ligação profundamente enraizada aos esportes.
                        </div>
                        <div class="f1textoo">
                            O seu portfólio amplo e diversificado, abrange os principais esportes globais.
                        </div>
                        <div class="f1textoo2">
                            Isto tem permitido à Destiny transcender barreirAs e buscar tornar-se uma das marcas mais reconhecidas do Brasil.
                        </div>
                    </div>
                </div>
            </div>
'
            <div class="faixa-2">
                <div class="titulos">Missão</div>
                <div class="f2conteudo">
                    <div class="f2text">
                        <div class="f1textoo">
                            ASSIM COMO ATLETAS, NÃO ACEITAMOS O MÉDIO.
                        </div>
                        <div class="f1textoo">
                            O QUE FAZEMOS ESTÁ FOCADO NO ESPORTE E ATRAVÉS DELE MUDAREMOS VIDAS 
                        </div>
                    </div>
                    <div class="f2-img" >
                        <img src="../assets/images/surf.jpeg" alt=""/>
                    </div>
                </div>
            </div>'

            <div class="faixa-3">
                <div class="titulos">Visão</div>
                <div class="f3conteudo">
                    <div class="f3img"> <img alt='' src="../assets/images/vasco.jpeg"/> </div>
                    <div class="f3text">
                        <div class="f3textoo">
                            NOS ESFORÇAREMOS PARA ROMPER E EXPANDIR LIMITAÇÕES, 
                            SENDO ACESSÍVEL E INCLUINDO TODOS E TORNANDO O 
                            AMBIENTE ESPORTIVO UM LUGAR INCLUSIVO. 
                        </div>
                    </div>
                </div>
            </div>

            <div class="faixa-4">
                <div class="titulos">Valores</div>
                <div class="f4conteudo">
                    <div class="f4text">
                        <div class="f4textoo">
                            ÉTICA, RESPEITO, INCLUSÃO E SUSTENTABILIDADE
                        </div>
                    </div>
                    <div class="f4img">
                        <img src="../assets/images/dejong.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}