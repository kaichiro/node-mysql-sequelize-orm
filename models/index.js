const {
    database,
    host,
    port,
    user,
    password,
    dialect,
} = require('../config-db.json')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    database,
    user,
    password,
    {
        dialect: dialect
        , host: host,
    },
)

const models = {}
const fs = require('fs')
const path = require('path')
fs
    .readdirSync(__dirname)
    .filter((file) => 'index.js' !== file)
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        models[model.name] = model
    })

module.exports = {
    sequelize,
    models,
}