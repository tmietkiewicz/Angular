angular.module('Workshop')
    .directive('loginForm', function () {
        return {
            restrict: 'E',
            templateUrl: '_directives/login-form.html',
            transclude: true,
            scope: {},
            controller: function ($scope,$rootScope, $http) {
                //variables
                $scope.user = {};
                var backendUrl = 'http://188.226.184.180:3000/api/';
                $scope.loginMessage = '';

                //methods
                $scope.login = function(user){
                    $http.post(backendUrl + 'users', {'username':user.login, 'password':user.password})
                        .then(function(response){

                            $scope.loginMessage = response.data.message;
                            $rootScope.$broadcast('loggenIn');
                            $rootScope.loggedIn = true;
                        }, function errorCallback(error){
                            console.log('błąd',error);
                            $scope.loginMessage = error.data.message;
                            $rootScope.loggedIn = false;
                        }
                    )
                }
            }
        }
    });