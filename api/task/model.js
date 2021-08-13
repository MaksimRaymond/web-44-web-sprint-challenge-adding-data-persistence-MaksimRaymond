// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
}

function findById(task_id) {
    return db('tasks').where('task_id', task_id)
}

function createTask(task){
    return db('task')
    .insert(task, 'task_id')
    .then(ids => ({ task_id: ids[0] }));
}

module.exports = {
    getTasks,
    findById,
    createTask,
}
