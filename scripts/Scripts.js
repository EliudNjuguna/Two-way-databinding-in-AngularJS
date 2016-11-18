
var myApp = angular.module("myModule",[])
				   .controller('myController',function($scope){
				   	
				   		var employee = {

				   			firstName: "Eliud",
				   			lastName: "Kaka",
				   			gender: "Male"

				   		};
				   		$scope.employee = employee;
				   });

