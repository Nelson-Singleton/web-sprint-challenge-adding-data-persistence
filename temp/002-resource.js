
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};

.createTable("resource", tbl => {
  tbl.increments();
  tbl.string("name").notNullable()
  tbl.text("description", 256)
  tbl.integer("project_id").unsigned().references("id").inTable("project").onDelete("RESTRICT").onUpdate("CASCADE");
})