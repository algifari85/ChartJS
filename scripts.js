var ctx = document.getElementById('myChart2');
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['Sökande idag','Sökande igår','Sökande just nu'],
		datasets: [{
			label: 'Akutmed',
			data: [24,25,26],
			backgroundColor: [
				'rgba(100,99,132,0.8)',
				'rgba(150,99,132,0.8)',
				'rgba(250,99,132,0.8)'
			],
			borderWidth: 1,
			borderColor:'rgba(0,0,0,1)',
			weight:1
		}]},
	options:{
		scales:{
			yAxes:[{
				ticks:{
					beginAtZero:true
				}
			}]

		}
	}
});