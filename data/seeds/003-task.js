exports.seed = function (knex) {
  const resource = [
      {
          
          description: "Sprint Challenge Task",
          notes: "Do it",
          completed: true,
          project_id: 1
      },      
    ]

    return knex('task').insert(task)
};