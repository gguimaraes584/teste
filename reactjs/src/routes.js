import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Index from './pages/home/index'
import Login from './pages/login'
import SobreNos from './pages/sobre nos'
import AddEndereco from './pages/endereço/adicionar-endereco';
import Parcelamento from './pages/parcelamento';
import Pagamento from './pages/pagamentos';
import Desc from './pages/descricao-produto';
import Feminino from './pages/produtos-femininos';
import Infantil from './pages/produtos-infantis';
import Masculinos from './pages/produtos-masculinos';
import Lancamentos from './pages/lancamentos';
import ProdutosTodos from './pages/produtos-todos';
import LoginAdm from './pages/login-adm';
import Pedidos from './pages/pedidos';
import registrarUser from './pages/registrar-user';
import PedidosAdmin from './pages/pedidos-adm';
import CadastrarProduto from './pages/cadastrar-produto';
import carrinho from './pages/carrinho';


export default function Final() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Index} />
            <Route path='/login' exact={true} component={Login} />
            <Route path='/sobre-nos' component={SobreNos} />
            <Route path='/add-endereco' component={AddEndereco} />
            <Route path='/parcelamento' component={Parcelamento} />
            <Route path='/pagamento' component={Pagamento} />
            <Route path='/descricao-produto' component={Desc} />
            <Route path='/produtos-femininos' component={Feminino}/>
            <Route path='/produtos-infantis' component={Infantil}/>
            <Route path='/produtos-masculinos' component={Masculinos}/>
            <Route path='/lancamentos' component={Lancamentos}/>
            <Route path='/produtos-todos' component={ProdutosTodos}/>
            <Route path='/admin/login' component={LoginAdm}/>
            <Route path='/pedidos' component={Pedidos}/>
            <Route path='/registrar' component={registrarUser}/>
            <Route path='/admin/pedidos' component={PedidosAdmin}/>
            <Route path='/admin/cadastrar' component={CadastrarProduto}/>
            <Route path='/carrinho' component={carrinho}/>
            
        </Switch>
    </BrowserRouter>
    )
}