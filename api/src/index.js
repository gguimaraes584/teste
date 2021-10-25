import db from './db.js'
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


app.get('/produto', async (req, resp) => {
    try {
        let a = await db.infoa_dtn_tb_produto.findAll({ order: [['id_produto', 'desc']]})
        resp.send(a);
    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.post('/produto', async (req, resp) => {
    try {
        let {nome, categoria, precode, precopor, avaliacao, descricao, estoque, linkimg} = req.body;
        let produtoOK = await db.infoa_dtn_tb_produto.findOne({ where: { nm_produto: nome}})
        if(produtoOK !== null)
            return resp.send({ erro: ' VIIIISH LEK PRODUTO JÀ INSERIDO'})
        let r = await db.infoa_dtn_tb_produto.create({
            nm_produto: nome,
            ds_categoria: categoria,
            vl_preco_de: precode,
            vl_preco_por: precopor,
            vl_avaliacao: avaliacao,
            ds_produto: descricao,
            qtd_estoque: estoque,
            img_produto: linkimg,
            bt_ativo: 1,
            dt_inclusao: new Date()
        })
        resp.send(r);

        } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.put('/produto/:id', async (req, resp) => {
    try {
        let {nome, categoria, precode, precopor, avaliacao, descricao, estoque, imgproduto, ativo, inclusao} = req.body;
        let {id} = req.params;

        let r = await db.infoa_dtn_tb_produto.update(
            {
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: precode,
                vl_preco_por: precopor,
                vl_avaliacao: avaliacao,
                ds_produto: descricao,
                qtd_estoque: estoque,
                img_produto: imgproduto,
                bt_ativo: ativo,
                dt_inclusao: inclusao
            },
            {
                where: { id_produto: id }
            }
        )
        resp.sendStatus(200);
    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.delete('/produto/:id', async (req, resp) => {
    try {
        let {id} = req.params;

        let r = await db.infoa_dtn_tb_produto.destroy({
            where: { id_produto: id}
        })
        resp.sendStatus(200)
    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.get('/cliente', async (req, resp) => {
    try{
        let clientes = await db.infoa_dtn_tb_cliente.findAll({order: [['id_cliente', 'desc']]})
        resp.send(clientes);
    } catch (e) {
        resp.send('Ocorreu um erro');
    }
})

app.post('/cliente', async (req, resp) => {
    try {
        let cliente = req.body

        let u = await db.infoa_dtn_tb_cliente.findOne({where: {nm_cliente: cliente.nome} })
        if (u != null)
            return resp.send({erro: 'Usuário já existe'}) 
        let r = await db.infoa_dtn_tb_cliente.create({
            nm_cliente: cliente.nome,
            ds_email: cliente.email,
            ds_senha: cliente.senha,
            dt_nascimento: cliente.nascimento
        })
        resp.send(r);
    } catch (e) {
        resp.send('Ocorreu um erro');
    }
})

app.listen(process.env.PORT, x => console.log(`subiu na porta ${process.env.PORT}`));