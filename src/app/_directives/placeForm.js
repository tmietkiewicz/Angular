angular.module('Workshop')
    .directive('placeForm', function () {
        return {
            restrict: 'E',
            templateUrl: '_directives/place-form.html',
            transclude: true,
            scope: {},
            controller: function ($scope, $rootScope, $http) {
                //variables
                $scope.newPlace = {};
                $scope.placeToUpdate = [];
                $scope.updateModeFlag = false;

                $scope.cities = [
                    {
                        city:'Gdańsk',
                        state:'Pomorskie',
                        hasTram:'Yes'
                    },
                    {
                        city:'Gdynia',
                        state:'Pomorskie',
                        hasTram:'No'
                    },
                    {
                        city:'Sopot',
                        state:'Pomorskie',
                        hasTram:'No'
                    },
                    {
                        city:'Rumia',
                        state:'Pomorskie',
                        hasTram:'No'
                    },
                    {
                        city:'Reda',
                        state:'Pomorskie',
                        hasTram:'No'
                    },
                    {
                        city:'Wejherowo',
                        state:'Pomorskie',
                        hasTram:'No'
                    }
                ];

                //methods
                $rootScope.$on('updateMode', function(evt, place){
                    $scope.placeToUpdate = place;
                    $scope.updateModeFlag = true;
                });

                $scope.updatePlace = function (place){
                    $http.put('http://188.226.184.180:3000/api/place/' + place._id, place)
                        .then(function(response){
                            $rootScope.$broadcast('refreshPlacesList');
                            $scope.updateModeFlag = false;
                        });
                };

                $scope.addPlace = function (item){
                    var place = angular.copy(item);
                    $http.post('http://188.226.184.180:3000/api/places', place)
                        .then(function(response){
                            $rootScope.$broadcast('refreshPlacesList');                        });
                };

                $scope.getPlace = function (id){
                    $http.get('http://188.226.184.180:3000/api/place/' + id)
                        .then(function(response){
                            return response.data;
                        });
                };

                $scope.updateModeCancel = function (){
                    $scope.updateModeFlag = false;
                };
            }
        }
    });