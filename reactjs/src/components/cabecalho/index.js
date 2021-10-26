import { CabecalhoDiv } from "./styled";
import { Link } from 'react-router-dom'
import logoSite from '../../assets/images/logo.svg'

export default function Cabecalho() {
    return (
        <CabecalhoDiv>
            <div class="logo">
                <Link to='./'>
                <img src={logoSite} alt="" width="100px" height="50px" />
                </Link>
            </div>
            <div class="menu">
                <div class="menu-item"><Link to='/lancamentos'> Lançamento</Link></div>
                <div class="menu-item"><Link to='/produtos-femininos'> Feminino</Link></div>
                <div class="menu-item"><Link to='/produtos-masculinos'> Masculino</Link></div>
                <div class="menu-item"><Link to='/produtos-infantis'> Infantil</Link></div>
            </div>
            <div class="menu-botao">
                <Link to='/carrinho'><button><img src="/assets/images/carrinhoo.svg" alt="" width='20px' /></button></Link>
            </div>
        </CabecalhoDiv>
    )
}