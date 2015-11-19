(function(){
  var appModule = angular.module("test_module", ["chart.js", "btford.socket-io", "ui.router"]);

  appModule.controller("test_controller", function($scope){
    $scope.title = "Test Angular";
  });


    appModule.factory('mySocket', function (socketFactory) {
      return socketFactory();
    });

  appModule.controller("DoughnutCtrl",	function	($scope, mySocket)	{
		$scope.labels	=	["yes",	"no",	"don't care"];

    mySocket.on("poll", function(data){
      $scope.data = data;
    });

    $scope.sendChoice = function(choice){
      mySocket.emit('vote', choice);
    };

    $scope.sendReset = function(){
      mySocket.emit('reset');
    }


  });

  appModule.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/doughnut');
    $stateProvider.state('doughnut',{
      url: "/doughnut",
      templateUrl: 'views/doughnut.html'});

      $stateProvider.state('piechart', {
        url: "/piechart",
        templateUrl : 'views/piechart.html'
      });

    $stateProvider.state('polar',{
      url : '/polar',
      templateUrl : 'views/polar.html'
    })
  });

})();
