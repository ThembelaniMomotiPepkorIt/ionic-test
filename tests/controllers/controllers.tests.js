describe('controller tests' , function(){
	var scope;

	beforeEach(module('starter.controllers'));

	beforeEach(inject(function ($rootScope, $controller){
		scope = $rootScope;
		$controller('AccountCtrl', {$scope : scope});
	}));

	it('should have friends enabled', function(){
		expect(scope.settings.enableFriends).toEqual(true);
	});
});