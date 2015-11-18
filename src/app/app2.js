(function(){
    var app = angular.module('Workshop', [])
    app.controller('ClubController', function ($scope,$http){

        $http.get('http://188.226.184.180:3000/api/places')
            .then(function(response){
                $scope.club = response.data;
                console.log(response);
            });

        $http.post('http://188.226.184.180:3000/api/places', place)
            .then(function(response){
                console.log(response);
            });

        $scope.newPlace = {buildingName:'',buildingNumber:'',city:'',name:'',phone:'',street:''};
        $scope.addPlace = function (item){
            var newPlace = angular.copy(item);
            $scope.club.push(newPlace);
        }
    });
})();


