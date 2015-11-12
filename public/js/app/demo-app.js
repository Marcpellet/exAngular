(function(){
  var appModule = angular.module("test_module", []);

  appModule.controller("test_controller", function($scope){
    $scope.title = "Test Angular";
  });
})();
