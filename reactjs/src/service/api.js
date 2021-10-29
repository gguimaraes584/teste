import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listar(categoria){
        let r = await api.get(`/produto/${categoria}`);
        return r.data;
    }

    async inserir( nome, descricao, categoria, preco, tamanho, img){
        let r = await api.post('/produto', { nome, descricao, categoria, preco, tamanho, img} );
        return r.data;
    }

    async alterar(id, nome, descricao, categoria, preco, tamanho, img) {
       let r = await api.put(`/produto/${id}`, { nome, categoria, preco, img, descricao});
       return r.data;
    }

    async remover(id){
        let r = await api.delete(`/produto/${id}`);
        return r.data; 
    }
}