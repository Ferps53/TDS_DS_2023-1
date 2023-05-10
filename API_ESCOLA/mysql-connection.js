const  knex = require("knex")

module.exports = knex({

    client: "mysql",
    connection: {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "66571289",
    database: "escola"

}
})
