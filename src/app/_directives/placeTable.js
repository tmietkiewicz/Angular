angular.module('Workshop')
    .directive('placeTable', function () {
        return {
            restrict: 'E',
            templateUrl: '_directives/place-table.html',
            transclude: true,
            scope: {},
            controller: function ($scope,$rootScope,$http) {
                //variables
                $scope.club = [];

                //methods
                var getPlaces = function (){
                    $http.get('http://188.226.184.180:3000/api/places')
                        .then(function(response){
                            $scope.club = response.data;
                        });
                };

                $rootScope.$on('refreshPlacesList', function(){
                    getPlaces();
                });

                $scope.remove = function (item) {
                    $http.delete('http://188.226.184.180:3000/api/place/'+item._id);
                    var idx = $scope.club.indexOf(item);
                    $scope.club.splice(idx, 1);
                };

                $scope.updateMode = function (place){
                    $rootScope.$broadcast('updateMode', place);
                };

                getPlaces();
            }
        }
    });