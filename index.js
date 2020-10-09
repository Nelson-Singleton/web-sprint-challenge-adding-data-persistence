const express = require('express')
const helmet = require('helmet')

const server = express()
server.use(express.json())

const projectsRouter = require('./routers/router')
const db = require('./db-config')

server.use(helmet())

//server.use('/api/projects', projectsRouter)


server.get('/', (req, res) => {
    res.send('Working')
})

server.get('/api/projects', (req, res) => {
    db('project as p')
    .select("p.id", "p.name", "p.description", "p.completed")
    .then(projects => {
        res.status(200).json({ data: projects });
    })
    .catch(error => {
        res.status(500).json({ message: error.message });
    });
})

server.post('api/projects', (req, res) => {
    db('projects')
    .insert(req.data, "id")
    
})
   

server.get('/api/resources',(req,res) => {
    db('resource as r')
    .select("r.id", "r.description", "r.notes", "r.project_id")
    .then(resources => {
        res.status(200).json({ data: resources });
    })
    .catch(error => {
        res.status(500).json({ message: error.message });
    });
})

server.post('api/resources', (req, res) => {
    db('resource')
    .insert(req.data, "id")    
})

    
server.get('/api/tasks', (req, res) => {
    db('task as t')
    .select("t.id", "t.description", "t.notes", "t.project_id")
    .then(tasks => {
        res.status(200).json({ data: tasks });
    })
    .catch(error => {
        res.status(500).json({ message: error.message });
    });
})

server.post('api/task', (req, res) => {
    db('resource')
    .insert(req.data, "id")    
})

server.listen(5000, () => {
    console.log ('Server running on port 5000')
})

//module.exports = server;

