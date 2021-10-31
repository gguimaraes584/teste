import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";
import { Button } from "../../../components/button/styled";
import { Input } from "../../../components/input/styled";

export default function Login() {
    return(
        <Container>
            <Cabecalho/>
            <div class="conteudo-reg">
                <div class="box-reg">
                    <div class="reg-titulo">Fazer Login</div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">E-Mail:</div>
                        <div class="reg-campos-input">
                            <Input type="text" />
                        </div>
                    </div>

                    <div class="reg-campos">
                        <div class="reg-campotitulo">Senha:</div>
                        <div class="reg-campos-input">
                            <Input type="password" />
                        </div>
                    </div>

                    <div class="reg-a">
                        <Button href="https://www.youtube.com/watch?v=Mj5udbZml_I">Entrar</Button>
                    </div>

                    <div class="reg-conta">
                        <div class="a">
                            <a href="https://www.youtube.com/watch?v=Mj5udbZml_I">Não Possuo Conta | Registrar-se</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}