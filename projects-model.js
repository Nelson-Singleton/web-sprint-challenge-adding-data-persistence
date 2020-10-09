const db = require("./db-config")

module.exports = {
    addResources,
    findResources,    
    addProjects,
    findProjects,
    addTasks,
    findTasks,
};

function addResources() {
    return db('projects')
        .select
}

function findResources() {
    return db('projects')
}

function addProjects() {
    return db('projects')
}

function findProjects() {
    return db('projects')
}

function addTasks() {
    return db('projects')
}

function findTasks() {
    return db('projects')
}