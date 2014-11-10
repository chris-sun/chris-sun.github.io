var myApp = angular.module('madlibs',[]);

myApp.controller('mainController', ['$scope', function($scope) {
    $scope.show_inputs = true;
    $scope.greeting = 'Automate This Dude!';
    $scope.max_length = 15;
    $scope.debug = false;
    $scope.data = { female_name: '',
                    dirty_task: '',
                    obnoxiuous_celebrity: '',
                    job_title: '',
                    celebrity: '',
                    huge_number: '',
                    tedious_task: '',
                    useless_skill: '',
                    adjective: ''
    };

    $scope.start_over = function() {
      console.log('will set show_inputs to true');
      $scope.show_inputs = true;
    };

    $scope.submitFunc = function(valid) {
      if (valid) {
        console.log('The form is valid');
        $scope.show_inputs = false;
      } else {
        console.log('The form is invalid');
      }

    };
}]);
