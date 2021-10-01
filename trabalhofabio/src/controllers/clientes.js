let clientesService = require('../services/clientes')

const getClientes = async (req, res, next) => {
    try {
        await clientesService.getClientes()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}
const postClientes = async (req, res, next) => {
    try {
        await clientesService.postClientes(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const deleteClientes = async (req, res, next) => {
    try {
        await clientesService.deleteClientes(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const patchClientes = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await clientesService.patchClientes(params)
        .then(req => res.status(200).send(req))
        .catch(err => res.status(500).send(err))
        } catch (err) {
            next(err);
        }
}

module.exports.getClientes = getClientes;
module.exports.postClientes = postClientes;
module.exports.deleteClientes = deleteClientes;
module.exports.patchClientes = patchClientes;