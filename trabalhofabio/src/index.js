const express = require ('express')
const app = express()
app.use(express.json())

require('./services/swagger')

require('./routes')(app)
app.get ('/', (req, res) => res.status(200).send("Servidor rodando porta 3000"))
app.get ('/fabio', (req, res) => res.status(200).send("FABIO"))

app.use('/v1/docs', express.static('src/views'))
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))

app.listen(3000)