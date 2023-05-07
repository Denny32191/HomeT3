const workers = [
  { name: "Elena", salary: 500 },
  { name: "Kirill", salary: 1300 },
  { name: "Sergey", salary: 1500 },
];

const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];

  workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name)
    }
  })

  return worthyWorkers; 
};

console.log(getWorthyWorkers(workers)); 