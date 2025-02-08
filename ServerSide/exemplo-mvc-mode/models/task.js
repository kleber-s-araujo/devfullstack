
const tasks = [
  {
    id: 1,
    title: 'Comprar mantimentos',
    description: 'Pegar leite, ovos e pão no supermercado.',
    completed: false,
    created_at: new Date(),
  },
  {
    id: 2,
    title: 'Estudar programação',
    description: 'Aprender sobre Node.js e Express.',
    completed: false,
    created_at: new Date(),
  },
  {
    id: 3,
    title: 'Fazer exercícios',
    description: '30 minutos de exercícios aeróbicos.',
    completed: true,
    created_at: new Date(),
  }
];
module.exports = {
  getAllTasks: () => tasks,
  addTask: (task) => tasks.push(task),
};