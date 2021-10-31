import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";

export default function registrarUser(){
    return(
        <Container>
            <Cabecalho/>
        
        <div class="conteudo-reg">
            <div class="box-reg">
                <div class="reg-titulo">Registrar</div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">E-Mail:</div>
                    <div class="reg-campos-input">
                        <input type="text">
                    </input>
                    </div>
                </div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">Confirmar E-mail:</div>
                    <div class="reg-campos-input">
                        <input type="text">
                    </input>
                </div>
                </div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">Senha:</div>
                    <div class="reg-campos-input">
                        <input type="password">
                    </input>
                </div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">Confirmar Senha:</div>
                    <div class="reg-campos-input">
                        <input type="password">
                    </input>
                </div>
                <div class="reg-a">
                    <a href="https://www.youtube.com/watch?v=Mj5udbZml_I">Registrar</a>
                </div>
                <div class="reg-conta">
                    <div class="a">
                        <a href="https://www.youtube.com/watch?v=Mj5udbZml_I">Já Possuo Conta | Fazer Login</a>
                    </div>
                </div>

            </div>
            </div>
            </div>
        </div>
        </Container>
    )
}