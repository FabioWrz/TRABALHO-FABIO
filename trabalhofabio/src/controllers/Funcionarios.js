let FuncionariosService = require('../services/Funcionarios')

const getFuncionarios = async (req, res, next) => {
    try {
        await FuncionariosService.getFuncionarios()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postFuncionarios = async (req, res, next) => {
    try {
        await FuncionariosService.postFuncionarios(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const deleteFuncionarios = async (req, res, next) => {
    try {
        await FuncionariosService.deleteFuncionarios(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
        }
    }

const patchFuncionarios = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await FuncionariosService.patchFuncionarios(params)
        .then(req => res.status(200).send(req))
        .catch(err => res.status(500).send(err))
        } catch (err) {
            next(err);
        }
}

module.exports.getFuncionarios = getFuncionarios;
module.exports.postFuncionarios = postFuncionarios;
module.exports.deleteFuncionarios = deleteFuncionarios;
module.exports.patchFuncionarios = patchFuncionarios;