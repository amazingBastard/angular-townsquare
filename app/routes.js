webApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/settings.html',
			controller  : 'SettingsController'
		});
}]);
