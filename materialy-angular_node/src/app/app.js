(function(){
var app = angular.module('Workshop', [])
    app.controller('PeopleController', function ($scope,$http){
        $scope.people = [];

        $http.get('http://www.w3schools.com/angular/customers.php')
            .then(function(response){
                $scope.people = response.data.records;
               console.log(response);
            });

        $scope.reorder = function (field) {
            $scope.desc = $scope.sortingField === field ? !$scope.desc : false;
            $scope.sortingField = field;
        };

        $scope.newItem = { Name: '', City: '', Country: '' };
        $scope.addItem = function (item) {
                var newItem = angular.copy(item);
                $scope.people.push(newItem);

        };

        $scope.remove = function (item) {
            var idx = $scope.people.indexOf(item);
            $scope.people.splice(idx, 1);
        };

        $scope.filterValue = '';
        //$scope.filter = function (filter){
        //
        //};

    });
})();