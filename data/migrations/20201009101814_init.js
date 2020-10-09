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
            tbl.integer("project_id").unsigned().references("id").inTable("project").onDelete("RESTRICT").onUpdate("CASCADE");
        })

        .createTable("task", tbl => {
            tbl.increments();
            tbl.text("description", 256).notNullable()
            tbl.text("notes", 256)
            tbl.boolean("completed").defaultTo(false).notNullable()
            tbl.integer("project_id").unsigned().references("id").inTable("project").onDelete("RESTRICT").onUpdate("CASCADE");
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("task")
        .dropTableIfExists("resource")
        .dropTableIfExists("project");        
};
