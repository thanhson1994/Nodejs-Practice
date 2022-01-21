const Todos = require('../models/todos')

exports.getTodos = (req, res, next) => {
    Todos.find().then(result => {
      res.status(200).json({
        data: result
      });
    }).catch(err => console.log(err))
};
  
exports.createTodos = (req, res, next) => {
  
  const title = req.body.title;
  const completed = req.body.completed;
  console.log('title', title);
  const todos = new Todos({
    title: title,
    completed: completed
  })
  todos.save().then(result => {
    res.status(201).json({
      message: 'Todos created successfully!',
      data: result
    });
  }).catch(err => console.log('err'))
  // Create post in db
};


exports.getEditTodo = (req, res, next) => {
  const id = req.params.id;
  Todos.findById(id).then(todo => {
    if(!todo) {
      res.status(404)
    }
    res.status(200).json({
      data: todo
    });
  }) 
};

  
  