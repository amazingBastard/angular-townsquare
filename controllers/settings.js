webApp.controller('SettingsController', ['$scope', '$http', function($scope, $http){
  $scope.colorIcons = 'off';
  $scope.color = false;

  $http.get('assets/json/accounts.json')
    .then(function(res){
      $scope.accounts = res.data;
    });
}]);
