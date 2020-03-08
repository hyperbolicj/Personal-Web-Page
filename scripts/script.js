var app = angular.module("myApp", []);
app.controller(
	'MainController',
	['$scope', function ($scope) {
		$scope.title = 'sewing';
		$scope.showDWS = function()
		{
			$scope.title = "drawings";
			return;
		};
		$scope.showSWP = function()
		{
			$scope.title = "sewing";
			return;
		};
		$scope.drawings = [
  		{ 
    			title: 'Interchange', 
    			date: new Date('2018', '00', '01'), 
    			srcname: 'images//dw1.png' 
  		}, 
  		{ 
    			title: 'Windswept Ridge', 
    			date: new Date('2019', '06', '05'), 
    			srcname: 'images//dw2.png' 
  		},
		{ 
    			title: 'Diva', 
    			date: new Date('2019', '06', '06'), 
    			srcname: 'images//dw3.png' 
  		},
		{ 
    			title: 'Rainy farewell', 
    			date: new Date('2019', '06', '12'), 
    			srcname: 'images//dw4.png' 
  		}, 
		{ 
    			title: 'Sanguine dance', 
    			date: new Date('2019', '06', '14'), 
    			srcname: 'images//dw5.png' 
  		},
		{ 
    			title: 'Surfs-up', 
    			date: new Date('2019', '06', '20'), 
    			srcname: 'images//dw6.png' 
  		}, 
		{ 
    			title: 'Roseburst', 
    			date: new Date('2019', '07', '03'), 
    			srcname: 'images//dw7.png' 
  		},
		{ 
    			title: 'Mechawasp', 
    			date: new Date('2019', '07', '17'), 
    			srcname: 'images//dw8.png' 
  		}, 
		{ 
    			title: 'Seahare', 
    			date: new Date('2019', '07', '17'), 
    			srcname: 'images//dw9.png' 
  		}, 
		{ 
    			title: 'Love lily', 
    			date: new Date('2019', '08', '02'), 
    			srcname: 'images//dw10.png' 
  		}, 
		{ 
    			title: 'Swapable', 
    			date: new Date('2019', '08', '02'), 
    			srcname: 'images//dw11.png' 
  		}, 
		{ 
    			title: 'Dance of death', 
    			date: new Date('2019', '08', '13'), 
    			srcname: 'images//dw12.png' 
  		}, 
		{ 
    			title: 'Sea turtle', 
    			date: new Date('2019', '09', '02'), 
    			srcname: 'images//dw13.png' 
  		}, 
		{ 
    			title: 'Sorrow', 
    			date: new Date('2019', '11', '01'), 
    			srcname: 'images//dw14.png'
  		}, 
		{ 
    			title: 'Fall', 
    			date: new Date('2019', '11', '07'), 
    			srcname: 'images//dw15.png' 
  		},
		{ 
    			title: 'Delicious', 
    			date: new Date('2020', '00', '12'), 
    			srcname: 'images//dw16.png' 
  		}, 
		{ 
    			title: 'On the hunt', 
    			date: new Date('2020', '00', '13'), 
    			srcname: 'images//dw17.png' 
  		}, 
		{ 
    			title: 'Candlelight', 
    			date: new Date('2020', '01', '08'), 
    			srcname: 'images//dw18.png' 
  		}, 
		{ 
    			title: 'Illness', 
    			date: new Date('2020', '01', '16'), 
    			srcname: 'images//dw19.png' 
  		}, 
		{ 
    			title: 'Desert rise', 
    			date: new Date('2020', '01', '24'), 
    			srcname: 'images//dw20.png' 
  		}
		]
		$scope.swproj = [
		{
			title: 'Bees',
			date: new Date('2020', '01', '09'),
			srcname: 'images//swprj1.png'
		},
		{
			title: 'Sailor',
			date: new Date('2020', '01', '27'),
			srcname: 'images//swprj2.png'
		},
		]
	}
	]
);