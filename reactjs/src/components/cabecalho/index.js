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
                <Link to='http://localhost:3000/carrinho'><button><img src="https://s3-alpha-sig.figma.com/img/d2fc/4c61/d7f60fb532ee1effc5efe77c5a2dc402?Expires=1633910400&Signature=MWOYA7j9HoCakMJkQ8rxhtXn8wQEGrbJkdyODjfCQmewYMPjvxnsGQlm0a-3usoW4YFUeUtjVUPxqJnwAS0PmUNIb2paT7bijZlKpG8Rn~S27DMOEwuZvCZEpE3qt91rv~Cw-CeA7BZMLyqzxbXI9jd616gFnf7b2dFtAmseoDWkf1oq2tf5DKxETGZnxZuh3fmjqTJX-s7vdolVaksFZVN5slx59YsF-GLK2Zb9e2YGDMOOPvZxTioVfnU8ibTSL5v~Gii7MJlQ9CTCFBqjxMs~STAys2AuFOBKPQomK85U-QPI6DtEzUZPGTV2sKMOK4z9ncDuVMoF05pbckC87g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" width='20px' /></button></Link>
            </div>
        </CabecalhoDiv>
    )
}