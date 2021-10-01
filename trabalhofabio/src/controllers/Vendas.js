let VendasService = require('../services/Vendas')

const getVendas = async (req, res, next) => {
    try {
        await VendasService.getVendas()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}
const postVendas = async (req, res, next) => {
    try {
        await VendasService.postVendas(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const deleteVendas = async (req, res, next) => {
    try {
        await VendasService.deleteVendas(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
        }
    }

    const patchVendas = async (req, res, next) => {
        try {
            let params = req.body
            params.id = req.params.id
            await VendasService.patchVendas(params)
            .then(req => res.status(200).send(req))
            .catch(err => res.status(500).send(err))
            } catch (err) {
                next(err);
            }
    }

module.exports.getVendas = getVendas;
module.exports.postVendas = postVendas;
module.exports.deleteVendas = deleteVendas;
module.exports.patchVendas = patchVendas;