console.log('%c                ', 'background:#ec008c; color:  #FFF');
console.log('%c  Hello, HUGE!  ', 'background:#ec008c; color:  #FFF');
console.log('%c                ', 'background:#ec008c; color:  #FFF');
// this is now angular take over

var navApp = angular.module('navApp', [])

navApp.controller('NavListController', ['$scope','$http', function($scope, $http){
	$scope.devtest = "this test is up";
	$http.get('api/nav.json')
		.success(function(data, status, headers, config) {
			  $scope.navlist = data;
			  $scope.linklist = data.items;
			  // console.log(data);
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });

}]);


// getReq.onreadystatechange = function(){
// 	getReq.open('GET','../../api/nav.json',true);
// 	getReq.send();
// 	console.log(getReq.responseText);
// };

// getReq.open("GET", '/api/nav.json', true);
// getReq.send();
