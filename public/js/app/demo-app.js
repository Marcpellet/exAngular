(function(){
  var appModule = angular.module("test_module", ["chart.js"]);

  appModule.controller("test_controller", function($scope){
    $scope.title = "Test Angular";
  });

  .controller("DoughnutCtrl",	function	($scope)	{
		$scope.labels	=	["Download	Sales",	"In-Store	Sales",	"Mail-Order	Sales"];
		$scope.data	=	[300,	500,	100];
  });
})();
