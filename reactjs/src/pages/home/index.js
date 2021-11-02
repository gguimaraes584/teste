import Cabecalho from '../../components/cabecalho/index.js'
import { Link } from 'react-router-dom'
import { Container } from './styled'

export default function Home () {
    return (
    <Container>
        <Cabecalho/>
        <div class="faixa-1">
            <div class="info">
                <div class="texto">O Melhor do Esporte Você encontra aqui</div>
            </div>
        </div>

        <div class="faixa-2">
            <div class="geral-masculino">
                <div class="masculino">Masculino</div>
                <div class="img-masculino">
                    <div class="img-fut">
                        <Link to="/produtos/masculinos">
                            <img src="./assets/images/nike-airmax.jfif" alt="" />
                        </Link>
                    </div>
                </div>
                <div class="desc-t">
                    <div class="tenis">Nike Air Max 2021</div>
                    <div class="grandes-passos">
                    DÊ GRANDES PASSOS PARA O QUE DER E VIER COM A
                    </div>
                <div class="fam">FAMÍLIA AIR MAX</div>
                </div>
            </div>
        </div>

        <div class="faixa-3">
            <div class="geral-feminino">
                <div class="feminino">Feminino</div>
                <div class="img-feminino">
                    <div class="img-fut">
                        <Link to='produtos/femininos'>
                            <img src="./assets/images/woman.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div class="desc-tf">
                    <div class="preo">NÃO SE PREOCUPE COM O SUOR, NÓS TE DAMOS</div>
                    <div class="sup">SUPORTE COM ELE</div>
                </div>
            </div>
        </div>

        <div class="faixa-4">
            <div class="geral-fut">
            <div class="fut">Todos os Produtos</div>
            <div class="img-fut">
                <Link to='/produtos/todos'>
                    <img src="./assets/images/barca.svg" alt="" />
                </Link>
                </div>
            <div class="desc-fut">
                <div class="vis">
                VISTA-SE PARA ANDAR COM O MAIOR ESTILO NO MUNDO
                </div>
            </div>
            </div>
            
        </div>
        <div class="faixa-5">
            <div class="categorias">Explore</div>
            <div class="box-img">
            <div class="img-categ">
                <img src="./assets/images/camisabr.svg" alt="" />
                <div class="descricao">Roupas</div>
            </div>
            <div class="img-categ">
                <img src="./assets/images/calcado.svg" alt="" />
                <div class="descricao">Calçados</div>
            </div>
            <div class="img-categ">
                <img src="./assets/images/calcado.svg" alt="" />
                <div class="descricao">Acessórios</div>
            </div>
            </div>
        </div>

        <div class="faixa-6">
            <div class="rodape">
            <div class="box-cartao">
                <div class="opcoes"><img src="../../public/images/boleto.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/pix.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/elo.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/hiper.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/master.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/visa.svg" alt="" /></div>
            </div>

            <div class="contato">
                <div class="fale"><b>Fale Conosco: </b></div>
                <div class="email">contato@destiny.com</div>
                <div class="email">0800-773-3475</div>
                <div class="redes">
                <div class="face"><img src="/assets/images/face.svg" alt="" /></div>
                <div class="face"><img src="/assets/images/insta.svg" alt="" /></div>
                </div>
            </div>
            </div>
        </div>
    </Container>
    )
}