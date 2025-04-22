// Line chart for unemployment insurance claims in Baltimore area counties and statewide median
var ctx = document.getElementById('myLineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan 6', 'Jan 13', 'Jan 20', 'Jan 27', 'Feb 3', 'Feb 10', 'Feb 17', 'Feb 24', 'March 3', 'March 9', 'March 16', 'March 23', 'March 30', 'April 6', 'April 13', 'April 20', 'April 27', 'May 4', 'May 11', 'May 18', 'May 25', 'June 1', 'June 8', 'June 15', 'June 22', 'June 29', 'July 6', 'July 13', 'July 20', 'July 27', 'Aug 3', 'Aug 10', 'Aug 17', 'Aug 24', 'Aug 31', 'Sept 7', 'Sept 14', 'Sept 21', 'Sept 28', 'Oct 5', 'Oct 12', 'Oct 19', 'Oct 26', 'Nov 2', 'Nov 9', 'Nov 16', 'Nov 23', 'Nov 30', 'Dec 7', 'Dec 14', 'Dec 21', 'Dec 28'],
        datasets: [
            {
                label: 'Baltimore County Unemployment Insurance Claims',
                data: [385, 446, 369, 449, 392, 367, 328, 340, 358, 344, 327, 325, 590, 490, 475, 356, 359, 375, 343, 363, 326, 326, 376, 395, 508, 395, 331, 349, 373, 360, 395, 329, 334, 294, 303, 319, 316, 274, 275, 337, 297, 267, 320, 319, 318, 312, 365, 279, 366, 315, 396, 482],
                borderColor: 'rgba(255, 8, 0)',
                tension: 0.1
            },
            {
                label: 'Baltimore City Unemployment Insurance Claims',
                data: [332, 363, 299, 399, 337, 354, 302, 285, 280, 315, 313, 303, 477, 419, 354, 305, 291, 337, 345, 358, 381, 348, 350, 474, 498, 410, 312, 377, 340, 312, 373, 337, 282, 268, 253, 229, 279, 277, 265, 306, 280, 242, 299, 292, 258, 294, 265, 239, 324, 304, 483, 491],
                borderColor: 'rgba(255, 165, 0)',
                tension: 0.1
            },
            {
                label: 'Anne Arundel County Unemployment Insurance Claims',
                data: [186, 202, 261, 197, 156, 188, 160, 130, 164, 172, 114, 120, 402, 240, 201, 150, 163, 174, 144, 156, 153, 134, 198, 364, 333, 208, 157, 213, 164, 164, 188, 210, 165, 151, 118, 111, 131, 142, 160, 145, 155, 163, 151, 159, 152, 164, 161, 361, 214, 134, 183, 383],
                borderColor: 'rgba(0, 128, 255)', 
                tension: 0.1
            },
            {
                label: 'Statewide Weekly Unemployment Insurance Claims Median',
                data: [53, 59.5, 54, 44.5, 40.5, 35.5, 33.5, 31.5, 31.5, 32, 31, 34.5, 44, 31, 24, 30.5, 27, 29.5, 32, 28, 31, 33.5, 45.5, 70, 73.5, 47.5, 32.5, 28.5, 34, 37.5, 43, 30.5, 25, 24, 26, 28, 37, 22.5, 32, 40.5, 38.5, 37, 40, 38.5, 44.5, 43.5, 49.5, 33.5, 59, 44, 54, 80],
                borderColor: 'rgba(128, 0, 128)', 
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Counties near Key Bridge far outpaced statewide median for unemployment insurance claims at time of bridge collapse',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Unemployment insurance claims in the Baltimore area spiked over the week ending March 30 — the week when the bridge collapsed.'
            },
            annotation: {
                annotations: {
                    box1: {
                        type: 'box',
                        xMin: 'March 23',
                        xMax: 'March 30',
                        backgroundColor: 'rgba(169, 169, 169, 0.2)',
                        borderColor: 'rgba(169, 169, 169, 0.8)',
                        borderWidth: 1,
                        label: {
                            display: true,
                            content: 'Key Bridge Collapse on March 26',
                            position: 'start',
                            xAdjust: -170,
                            yAdjust: 0,
                            font: {
                                size: 11,
                                weight: 'bold'
                            }
                            
                        }
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//End of line chart

//Start of bar chart
var ctx = document.getElementById('myBarChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Baltimore', 'Dundalk', 'Pasadena', 'Middle River', 'Essex', 'Glen Burnie', 'Rosedale', 'Parkville', 'Gwynn Oak', 'Sparrows Point', 'Nottingham', 'Windsor Mill', 'Brooklyn', 'Randallstown', 'Owings Mills', 'Bel Air', 'Abingdon', 'Catonsville', 'Edgewood', 'Halethorpe', 'Aberdeen', 'Columbia', 'Joppa', 'Perry Hall', 'Pikesville', 'Severn', 'Linthicum Heights', 'Hanover', 'Towson', 'Reisterstown', 'Laurel', 'Curtis Bay', 'Ellicott City', 'Westminster', 'Elkridge', 'Havre De Grace', 'Centreville', 'Cockeysville', 'Elkton', 'Forest Hill', 'York', 'Sykesville', 'Severna Park', 'White Marsh', 'Lutherville Timonium', 'Belcamp', 'Bowie', 'Fallston', 'Silver Spring', 'Stevensville', 'Jarrettsville', 'Upper Marlboro', 'Chester', 'Glen Arm', 'Hyattsville', 'Lanham', 'Manchester', 'Millersville', 'North East', 'Burtonsville', 'Chestertown', 'Delta', 'Finksburg', 'Kingsville', 'Port Deposit', 'Beltsville', 'Fort Howard', 'Germantown', 'Hampstead', 'Jessup', 'Mechanicsburg', 'New Freedom', 'Newark', 'Shrewsbury', 'Street', 'Washington', 'Woodstock', 'Annapolis', 'Easton', 'Frederick', 'Hagerstown', 'Pylesville', 'Rising Sun', 'White Hall', 'Whiteford', 'Wilmington', 'Woodbridge', 'Arnold', 'Baldwin', 'Bishopville', 'Clear Spring', 'Crofton', 'Deale', 'District Heights', 'Everett', 'Fairbank', 'Fayetteville', 'Hancock', 'Marydel', 'Milford', 'Monkton', 'Odenton', 'Parkton', 'Rockville', 'Seven Valleys', 'Spring Grove', 'Townsend', 'Upperco', 'Waldorf', 'Ashburn', 'Bear', 'Bedford', 'Berryville', 'Bethesda', 'Brooklandville', 'Butler', 'Camp Hill', 'Capitol Heights', 'Carlisle', 'Church Hill', 'Churchton', 'Churchville', 'Clinton', 'Coatesville', 'Conowingo', 'Cumberland', 'Dallastown', 'Darlington', 'Davidsonville', 'Denton', 'Derwood', 'Du Bois', 'Edgewater', 'Fairfield', 'Falls Church', 'Fawn Grove', 'Federalsburg', 'Felton', 'Fort George G Meade', 'Frostburg', 'Fulton', 'Gaithersburg', 'Galena', 'Gambrills', 'Grasonville', 'Greensboro', 'Halifax', 'Haymarket', 'Hughesville', 'Hurlock', 'Hydes', 'Keymar', 'Kinston', 'La Plata', 'Lancaster', 'Lilburn', 'Little Orleans', 'Lorton', 'Markleysburg', 'Martinsburg', 'Mechanicsville', 'Middletown', 'Millersburg', 'Millsboro', 'Minneapolis', 'Montgomery Village', 'Nanjemoy', 'New Market', 'New Paris', 'Olney', 'Oxon Hill', 'Perryville', 'Philadelphia', 'Phoenix', 'Port Saint Lucie', 'Queenstown', 'Red Lion', 'Ridgely', 'Salem', 'Savage', 'Seaford', 'Sharpsburg', 'Smyrna', 'Springfield', 'Stafford', 'Stewartstown', 'Sudlersville', 'Suitland', 'Taneytown', 'Temple Hills', 'Thurmont', 'Tilghman', 'Upper Falls', 'Vienna', 'Waynesboro', 'Wellington', 'York Haven'],
        datasets: [
            {
                label: 'Worker Support Program claims by city',
                data: [889, 283, 163, 114, 112, 111, 102, 99, 94, 92, 65, 65, 62, 54, 49, 47, 46, 44, 43, 38, 36, 36, 33, 31, 29, 26, 23, 20, 19, 18, 15, 14, 14, 14, 13, 13, 12, 12, 12, 12, 12, 11, 10, 10, 9, 8, 8, 8, 8, 8, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                backgroundColor: 'rgba(0, 128, 128, 1)',
                tension: 0.1
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Baltimore, Dundalk, Pasadena — expectedly — led Maryland in Worker Support Program claims',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The Key Bridge connected Dundalk, which is located in Baltimore County, with Pasadena in Anne Arundel County. Baltimore City, however, totalled the most overall claims. It also has, by far, the largest population of this cities.'
            },
        }
    }
})
//end of bar chart

//Start of radar chart
var ctx = document.getElementById('myRadarChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Direct Relief and Human Services', 'Small Business Reocvery', 'Community Resilience', 'Rememberance and Memorialization',],
        datasets: [{
            label: 'Amount given to category of organizations, in dollars',
            data: [6387947, 1400873, 826622, 570155],
            backgroundColor: [
                'rgba(255, 8, 0)',
                'rgba(255, 165, 0)',
                'rgba(0, 128, 255)'
            ],
            borderColor: [
                'rgba(255, 8, 0)',
                'rgba(255, 165, 0)',
                'rgba(0, 128, 255)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'How did the Baltimore Community Foundation allocate its Maryland Tough Baltimore Strong fund?',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: [
                    'The Baltimore Community Foundation raised more than $16 million for its Maryland Tough Baltimore Strong fund meant to provide relief',
                    'after the Key Bridge collapse in March 2024. This data is a sample of the online release of where the BCF distributed funds.',
                    'That included a grant of nearly $4.5 million to the CASH Campaign of Maryland, which then distributed direct cash payments to',
                    'impacted workers who lost their jobs or income due to the bridge collapse. The Baltimore Banner reported the BCF originally',
                    'planned to distribute part of the fund to families of the victims of the bridge collapse. But, according to the Banner,',
                    'that never happened.'
                ],
                font: {
                    size: 12
                },
                padding: {
                    bottom: 30
                },
                color: '#666'
            },
            legend: {
                position: 'top',
            },
        }
    }
});
//end of radar chart
