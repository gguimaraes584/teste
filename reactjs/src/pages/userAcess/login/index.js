import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";
import { Button } from "../../../components/button/styled";
import { Input } from "../../../components/input/styled";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api';
const api = new Api(); 


export default function Login() {

    const [ usuario, setUsuario] = useState('');
    const [ senha, setSenha] = useState('');

    const navigation = useHistory();

    const logar = async () => {
        let r = await api.login(usuario, senha);
        if (r.erro) {
            toast.error(`${r.erro}`)
        } else {
            toast.error("Login realizado com sucesso")
            navigation.push('/sobre-nos');
        }

    }

    return(
        <Container>
            <Cabecalho/>
            <ToastContainer/>

            
            <div class="conteudo-reg">
                <div class="box-reg">
                    <div class="reg-titulo">Fazer Login</div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">E-Mail:</div>
                        <div class="reg-campos-input">
                            <Input value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                             />
                        </div>
                    </div>

                    <div class="reg-campos">
                        <div class="reg-campotitulo">Senha:</div>
                        <div class="reg-campos-input">
                            <Input value={senha}
                            onChange={e => setSenha(e.target.value)}
                             type="password"/>
                        </div>
                    </div>

                    <div class="reg-a">
                        <Button onClick={logar}> Entrar

                        </Button>
                    </div>

                    <div class="reg-conta">
                        <div class="a">
                            <a href="">Não Possuo Conta</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}