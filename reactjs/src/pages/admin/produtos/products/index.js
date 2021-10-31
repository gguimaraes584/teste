import { Container } from "./styled";
import  "../../../../index.css";
import {Link} from "react-router-dom";
export default function Produtos () {
    return (
        <Container>

            <div className="conteudo">

                        <div className="a">

                    
                        <div className="botao1">
                             <button>
                                 <Link to ="/admin/cadastrar" style={{textDecoration: "none"}}>
                                 ADICIONAR NOVO PRODUTO
                                 </Link></button>
                         </div>
                        <div className="botao2">
                            <input type="text" placeholder="PESQUISAR PRODUTO"/>
                            <img src="../../../../../public/assets/search.svg" alt=""/>
                        </div>
                        </div>
                <table>
                <thead className="cabecalho">
                <tr>
                        <th>ID DO PRODUTO</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                        <th>CADASTRADO EM</th>
                        <th>CATEGORIA</th>
                        <th>AÇÕES</th>
                </tr>    
                </thead>

                <tr>
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr className="alternado">
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr>
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr className="alternado">
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr>
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr className="alternado">
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr>
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr className="alternado">
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr>
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>

                <tr className="alternado">
                    <td> 1 </td>
                    <td> TÊNIS NIKE AIR FORCE 1 CRATER</td>
                    <td> R$749,99</td>
                    <td> 25/09/2021 </td>
                    <td> CALÇADOS</td>
                    <td> <img src="../../../../assets/images/editar.svg" alt=""/></td>
                </tr>
                </table>
            </div>
        </Container>
    )
}