const express = require("express");
const model = require("../model");
const router = express.Router()


router.get('/projects', (req, res) => {
    model.findProject()    
    .then(projects => {
        res.status(200).json({ data: projects });
    })
    .catch(error => {
        res.status(500).json({ message: error.message });
    });
})

router.post('/projects', (req, res) => {
    model.addProject(req.body)
    
    .then(projects => {
        res.status(200).json({data: projects})
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add projects" });
    });
    
})
   

router.get('/resources',(req,res) => {
    model.findResource()
    .then(resources => {
        res.status(200).json({ data: resources });
    })
    .catch(error => {
        res.status(500).json({ message: error.message });
    });
})

router.post('/resources', (req, res) => {
    model.addResource(req.body)
    .then(resources => {
        res.status(200).json({data: resources})
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add resources" });
    });
})

    
router.get('/tasks', (req, res) => {
    model.findTask()
    .then(tasks => {
        res.status(200).json({ data: tasks });
    })
    .catch(error => {
        res.status(500).json({ message: error.message });
    });
})

router.post('/tasks', (req, res) => {    
    model.addTask(req.body)
    .then(task => {
        res.status(200).json({data: task})
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add task" });
    });   
})

module.exports = router;