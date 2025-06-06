//Beginning Scatter Plot
var ctx = document.getElementById('myScatterChart').getContext('2d');
var myScatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{ 
            data: [
                {x: 71.5, y: 3678},
            ],
            label: "China",
            borderColor: "#3e95cd",
            backgroundColor: "rgb(62,149,205,0.1)",
            borderWidth: 2,
        }, { 
            data: [
                {x: 61.1, y: 2548},
            ],
            label: "India",
            borderColor: "#3cba9f",
            backgroundColor: "rgb(60,186,159,0.1)",
            borderWidth: 2,
        }, { 
            data: [
                {x: 77.1, y: 45986},
            ],
            label: "US",
            borderColor: "#ffa500",
            backgroundColor: "rgb(255,165,0,0.1)",
            borderWidth: 2,
        }, { 
            data: [
                {x: 68.3, y: 5878},
            ],
            label: "Indonesia",
            borderColor: "#D4A9C8",
            backgroundColor: "rgb(240,214,232,0.1)",
            borderWidth: 2,
        }, { 
            data: [
                {x: 71.9, y: 11461},
            ],
            label: "Brazil",
            borderColor: "#E8CE94",
            backgroundColor: "rgb(255,240,201,0.1)",
            borderWidth: 2,
        }, { 
            data: [
                {x: 65.4, y: 13173},
            ],
            label: "Russia",
            borderColor: "#E8A2AE",
            backgroundColor: "rgb(255,212,219,0.1)",
            borderWidth: 2,
        }, { 
            data: [
                {x: 62.6, y: 3366},
            ],
            label: "Pakistan",
            borderColor: "#A6D9A6",
            backgroundColor: "rgb(212,245,212,0.1)",
            borderWidth: 2,
        }, {
            data: [
                {x: 65.8, y: 1632},
            ],
            label: "Bangladesh",
            borderColor: "#F0D6E8",
            backgroundColor: "rgb(224,190,216,0.1)",
            borderWidth: 2,
        }, { 
            data: [
                {x: 81.1, y: 32193},
            ],
            label: "Japan",
            borderColor: "#91D7E8",
            backgroundColor: "rgb(201,245,255,0.1)",
            borderWidth: 2,
        }]
    },
    options: { 
      plugins: {
        title: {
            display: true,
            text: "Life expentancy in Japan is more than three years higher than any other of the world's top 10 biggest GDP nations",
            font: {
                size: 18,
                weight: 'bold'
            },
            padding: {
                top: 10,
                bottom: 10
            }
          },
          subtitle: {
            display: true,
            text: "Yet half of the world's top 10 largest nations by GDP per capita have a life expectancy below 70 years.",
            font: {
              size: 14,
              style: 'italic'
            },
            padding: {
              bottom: 10
            }
          } 
        },
      scales: { 
            y: {
                title: {
                    display: true,
                    text: 'GDP per capita'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Life expectancy'
                }
            }
        }
    } 
}); 

// starting Bar Chart
var ctx = document.getElementById('myBarChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Average GDP per capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#ff0800'
            ]
        },  
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Europe & Central Asia have the highest average GDP per capita of six main world regions',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'South Asia and Sub-Saharan Africa trail far behind the rest of the world.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

//End Bar Chart