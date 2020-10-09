const db = require("./db-config");

module.exports = {
    addProject,
    addResource,
    addTask,
    findProject,
    findResource,
    findTask,

};

function addProject(project) {
    return db("project")
        .insert(project, "id")
        .then(ids => {     
            return db("project")      
        });
}

function findProject(){
    return db("project")
}

function addResource(resource) {
    return db("resource")
        .insert(resource, "id")
        .then(ids => {     
            return db("resource")      
        });
}

function findResource(){
    return db("resource")
}

function addTask(task) {
    return db("task")
        .insert(task, "id")
        .then(ids => {     
            return db("task")      
        });
}

function findTask(){
    return db("task")
    .join("project", "task.project_id", "=","project.id")
    .select("task.description", "task.notes", "task.completed", "project.name", "project.description")
    
}
