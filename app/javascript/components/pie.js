// function createPie() {
//   document.getElementById( "myChart" ).remove();
//   const chartjsPies = document.querySelectorAll(".chartjs-size-monitor")
//   if (chartjsPies.length > 1) {
//     chartjsPies[0].remove();
//   }
//   let canvas = document.createElement('canvas');
//   canvas.setAttribute('id','myChart');
//   canvas.setAttribute('width','200');
//   canvas.setAttribute('height','200');
//   document.querySelector('#container-chart').appendChild(canvas)
// };

// const pieIntialization = (register, abstention) => {
//   createPie();
//   const canvaPie = document.getElementById('myChart');
//   const votersPercentage = Math.round(((register - abstention)/register + Number.EPSILON) * 100);
//   const abstentionPercentage = Math.round(((abstention/ register) + Number.EPSILON) * 100);
//   const myNewChart = new Chart(canvaPie, {
//     type: 'doughnut',
//     data: {
//       labels: ['Votants', 'Abstentions'],
//       datasets: [{
//         label: '%',
//         data: [votersPercentage, abstentionPercentage],
//         backgroundColor: [
//             'rgba(30, 221, 136, 0.9)',
//             'rgba(226, 1, 27, 0.9)'
//         ],
//         borderColor: [
//             'rgba(30, 221, 136, 1)',
//             'rgba(226, 1, 27, 1)'
//         ],
//         borderWidth: 1
//       }],
//     },
//     options: {
//       responsive: true,
//       legend: {
//         labels: {
//             fontColor: 'white'
//         }
//       }
//     }
//   })
// }

// export { pieIntialization }


















