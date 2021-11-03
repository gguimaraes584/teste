import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home/index'
import Login from './pages/userAcess/login'
import SobreNos from './pages/home/sobre nos'
import AddEndereco from './pages/purchaseData/endereço/adicionar-endereco';
import Parcelamento from './pages/purchaseData/parcelamento';
import Pagamento from './pages/purchaseData/pagamentos';
import Desc from './pages/productDetails/descricao-produto';
import Feminino from './pages/productSections/produtos-femininos';
import Infantil from './pages/productSections/produtos-infantis';
import Masculinos from './pages/productSections/produtos-masculinos';
import Lancamentos from './pages/productSections/lancamentos';
import ProdutosTodos from './pages/productSections/todos-produtos';
import LoginAdmin from './pages/admin/login-adm/index';
import Pedidos from './pages/purchaseData/pedidos';
import registrarUser from './pages/userAcess/registrar-user';
import PedidosAdmin from './pages/admin/pedidos-adm';
import CadastrarProduto from './pages/admin/produtos/cadastrar-produto';
import Carrinho from './pages/purchaseData/carrinho';
import ClientesAdm from './pages/admin/clientes';
import Enderecos from './pages/purchaseData/endereço/meus-endereços';

import Produtos from  './pages/admin/produtos/products/index'

export default function Final() {
    return (
    <BrowserRouter>
        <Switch>
            {/*USUÁRIO*/}
            <Route path='/home' exact={true} component={Home} />
            <Route path='/' exact={true} component={Login} />
            <Route path='/sobre-nos' component={SobreNos} />
            <Route path='/endereço/add' component={AddEndereco} />
            <Route path='/parcelamento' component={Parcelamento} />
            <Route path='/pagamento' component={Pagamento} />
            <Route path='/produto/descricao' component={Desc} />
            <Route path='/produtos/femininos' component={Feminino}/>
            <Route path='/produtos/infantis' component={Infantil}/>
            <Route path='/produtos/masculinos' component={Masculinos}/>
            <Route path='/lancamentos' component={Lancamentos}/>
            <Route path='/produtos' component={ProdutosTodos}/>
            <Route path='/pedidos' component={Pedidos}/>
            <Route path='/registrar' component={registrarUser}/>
            <Route path='/carrinho' component={Carrinho}/>
            <Route path='/endereço'component={Enderecos}/>
            
            {/*PARTE ADMINISTRATIVA*/}
            <Route path='/admin/login' component={LoginAdmin}/>
            <Route path='/admin/cadastrar' component={CadastrarProduto}/>
            <Route path='/admin/cliente'component={ClientesAdm}/>
            <Route path='/admin/pedidos' component={PedidosAdmin}/>
            <Route path='/admin/produtos' component={Produtos}/>
        </Switch>
    </BrowserRouter>
    )
}