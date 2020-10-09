exports.up = function (knex) {
    return knex.schema
        .createTable("project", tbl => {
            tbl.increments();
            tbl.string("name").notNullable()
            tbl.text("description", 256)
            tbl.boolean("completed").defaultTo(false)
        })

        .createTable("resource", tbl => {
            tbl.increments();
            tbl.string("name").notNullable()
            tbl.text("description", 256)
        })

        .createTable("task", tbl => {
            tbl.increments();
            tbl.text("description", 256)
            tbl.text("notes", 256)
            tbl.boolean("completed").defaultTo(false).notNullable()
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("project")
        .dropTableIfExists("resoource")
        .dropTableIfExists("task");        
};
