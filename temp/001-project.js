
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

.createTable("project", tbl => {
  tbl.increments();
  tbl.string("name").notNullable()
  tbl.text("description", 256)
  tbl.boolean("completed").defaultTo(false)
})


exports.seed = function (knex) {
  const tracks = [
      {
          name: "web", // id: 1
      },
      {
          name: "data science", // id: 2
      },
      {
          name: "artificial intelligence", // id: 3
      },
  ];

  return knex("tracks").insert(tracks);
};

exports.seed = function (knex) {
  const cohorts = [
      {
          name: "web 1", // 1
          track_id: 1, // web
      },
      {
          name: "web 2", // 2
          track_id: 1, // web
      },
      {
          name: "web 3", // 3
          track_id: 1, // web
      },
      {
          name: "ds 1",
          track_id: 2, // web
      },
      {
          name: "ds 2",
          track_id: 2, // web
      },
  ];

  return knex("cohorts").insert(cohorts);
};
