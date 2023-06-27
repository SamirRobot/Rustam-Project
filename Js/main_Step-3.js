const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Silver','Green', 'Purple', 'Orange',],
      datasets: [{
        label: 'Весь зверей',
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Silver','Green', 'Purple', 'Orange'],
        borderColor: ['white'],
        data: [5, 2, 9, 10, 8, 1, 3, 7, 9, 7],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });