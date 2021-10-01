let ProdutosService = require('../services/Produtos')

const getProdutos = async (req, res, next) => {
    try {
        await ProdutosService.getProdutos()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postProdutos = async (req, res, next) => {
    try {
        await ProdutosService.postProdutos(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const deleteProdutos = async (req, res, next) => {
    try {
        await ProdutosService.deleteProdutos(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
        }
    }

    const patchProdutos = async (req, res, next) => {
        try {
            let params = req.body
            params.id = req.params.id
            await ProdutosService.patchProdutos(params)
            .then(req => res.status(200).send(req))
            .catch(err => res.status(500).send(err))
            } catch (err) {
                next(err);
            }
    }

    module.exports.getProdutos = getProdutos;
    module.exports.postProdutos = postProdutos;
    module.exports.deleteProdutos = deleteProdutos;
    module.exports.patchProdutos = patchProdutos;