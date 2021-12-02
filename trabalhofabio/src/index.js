const express = require ('express')
const app = express()
app.use(express.json())

require('./services/swagger')
const cors = require("cors")

let domains = ['http://localhost:8080', 'http://localhost:3000']

const corsOptions = {
    origin: function (origin, callback) {
        if (domains.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error(`Not allowed by CORS? ${origin} // ${domains}`))
        }
    }, 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", 
    credentials: true
}

app.use(cors(corsOptions))

require('./routes')(app)
app.get ('/', (req, res) => res.status(200).send("Servidor rodando porta 3000"))
app.get ('/fabio', (req, res) => res.status(200).send("FABIO"))

app.use('/v1/docs', express.static('src/views'))
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))

app.listen(3000)