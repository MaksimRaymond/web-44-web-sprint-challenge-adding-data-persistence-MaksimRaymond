// build your `Resource` model here
const db = require("../../data/dbConfig.js");

function getResources() {
    return db('resources')
}

function findById(id) {
    return db('resources')
    .where({resource_id: Number(id) }).first()
}

async function create(resource) {
    const [id] = await db('resources').insert(resource)
    return findById(id)
}

module.exports = {
    getResources,
    findById,
    create,
}