const swaggerAutogen = require ('swagger-autogen')('pt-BR');

const doc = {
    info: {
        version: "1.0.0",
        title: "API FABIO WRZESINSKI",
        description: "Documentação de API FABIO WRZESINSKI"
    },
    host: `localhost:3000`,
    basePath: "",
    schemes:['http'],
    consumes:['application/json'],
    produces:['application/json'],
}

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = ['./src/routes/clientes.js', './src/routes/Funcionarios.js', './src/routes/Produtos.js', './src/routes/Vendas.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);