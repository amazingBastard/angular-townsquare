webApp.controller('SettingsController', ['$scope', '$http', function($scope, $http){
  $http.get('../assets/json/accounts.json')
       .then(function(res){
          $scope.accounts = res.data;
        });
}]);
