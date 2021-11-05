import { Container } from "./styled";
import { Button } from "../../../components/button/styled";
import { Input } from "../../../components/input/styled";
import { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';


import Api from '../../../service/api';
const api = new Api(); 


export default function Login() {

    const [ usuario, setUsuario] = useState('');
    const [ senha, setSenha] = useState('');

    const loading = useRef(null); 
    const navigation = useHistory();

    const logar = async () => {
        loading.current.continuousStart();

        let r = await api.login(usuario, senha);
        if (r.erro) {
            toast.error(`${r.erro}`)
            loading.current.staticStart();
        } else {
            
            navigation.push('/home');
            
        }

    }

    return(
        <Container>
            
            <ToastContainer/>
            <LoadingBar color="red" ref={loading} />

            
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
                        <div class="reg-camposenha">Esqueceu sua senha?</div>
                        </div>
                    </div>

                    <div class="reg-a">
                        <Button onClick={logar}> Entrar

                        </Button>
                    </div>

                    <div class="reg-conta">
                        <div class="registrar"> 
                        <Link to="/registrar">Rejistre-se</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}