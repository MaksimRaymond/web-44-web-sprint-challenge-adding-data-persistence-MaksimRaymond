// build your `Project` model here
const db = require("..//../data/dbConfig")

function getProjects() {
    return db('projects')
}

function createProject(project){
    return db('projects')
    .insert(project, 'project_id')
    .then(ids => ({ id: ids[0]}));
}

function getById(id){
    return db('projects')
    .where({ project_id: Number(id) }).first()
}

module.exports = {
    getProjects,
    createProject,
    getById
}