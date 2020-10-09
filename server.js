const express = require('express');
const server = express();
const helmet = require('helmet')


server.use(express.json());
server.use(helmet())

const dbRouter = require("./routers/router") 


server.use("/api/projects", dbRouter)
server.use("/api/resources", dbRouter)
server.use("/api/tasks", dbRouter)

server.get('/', (req, res) => {
    res.send('Working')
})





module.exports = server;