webApp.controller('SettingsController', ['$scope', '$http', function($scope, $http){
  $scope.colorIcons = 'off';

  $http.get('/assets/json/accounts.json')
    .then(function(res){
      $scope.accounts = res.data;
    });
}]);
