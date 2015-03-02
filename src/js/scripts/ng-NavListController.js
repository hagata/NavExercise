
navApp.controller('NavListController', ['$scope','$http', function($scope, $http){
	$scope.devtest = "this test is up";
	$http.get('api/nav.json')
		.success(function(data, status, headers, config) {
			  $scope.navlist = data;
			  $scope.linklist = data.items;
			  // console.log(data);
		}).
		error(function(data, status, headers, config) {
			console.log(headers);
			console.log(status);
			console.log(config);
		});


//Toggles, Should refactor into a directive

	$scope.sideNav = false;
	$scope.toggleSideNav = function(){
		$scope.sideNav = !$scope.sideNav;
		//also run the screen
		$scope.navon = !$scope.navon;
	};


	$scope.setActive = function(active){
		$scope.active = active;
		console.log($scope.active);
		if (active && $scope.sideNav === false) {$scope.toggleScreen();};

	};



	$scope.toggleScreen = function(){
		$scope.navon = !$scope.navon
		console.log("navon :", $scope.navon);
	};
	
	$scope.toggleMobileNav = function(){
		$scope.showSub = false;
		console.log("hello");
		console.log("showSub = ", $scope.showSub);
	}

}]);


// // Some Test here
// describe('Data collection', function() {
// 	it('should connect and to api/nav', function() {
// 		expect(stat).toBe(200);
// 	});
// });