exports.seed = function (knex) {
  const project = [
      {
          name: "Sprint Challenge",
          description: "Fun...",
          completed: true
      },      
    ]

    return knex('projects').insert(project)
};

