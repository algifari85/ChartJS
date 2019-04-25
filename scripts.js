var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Sökande idag'],
		datasets: [{
			label: 'Akutmed',
			data: [24],
			backgroundColor: [
				'rgba(255,99,132,0.8)'

			]
		},{
			label: 'Ortoped',
			data: [25],
			backgroundColor: [
				'rgba(15,99,132,0.8)'
			]
		},{
			label: 'Kirurg',
			data: [84],
			backgroundColor: [
				'rgba(15,99,250,0.8)'
			]
		},{
			label: 'Totalt',
			data: [125],
			backgroundColor: [
				'rgba(250,209,132,0.8)'
			]
		}],
	},
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
var ctx = document.getElementById('myChart2');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Sökande idag'],
		datasets: [{
			label: 'Akutmed',
			data: [24],
			backgroundColor: [
				'rgba(255,99,132,0.8)'

			]
		},{
			label: 'Ortoped',
			data: [25],
			backgroundColor: [
				'rgba(15,99,132,0.8)'
			]
		},{
			label: 'Kirurg',
			data: [84],
			backgroundColor: [
				'rgba(15,99,250,0.8)'
			]
		},{
			label: 'Totalt',
			data: [125],
			backgroundColor: [
				'rgba(250,209,132,0.8)'
			]
		}],
	},
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