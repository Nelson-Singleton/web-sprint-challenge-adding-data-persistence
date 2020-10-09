exports.seed = function (knex) {
  const resource = [
      {
          name: "Some Resource",
          description: "Sprint Challenge Resource",
          project_id: 1
      },      
    ]

    return knex('resource').insert(resource)
};