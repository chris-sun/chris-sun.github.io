var myApp = angular.module('instagramSearch',[]);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.show_inputs = true;
    $scope.title = 'Instagram Photo Search';
    $scope.query = '';
    $scope.data = [];

    $scope.iSearch = function() {
      var url = "https://api.instagram.com/v1/tags/" + $scope.query + "/media/recent";

      var params = {
        count: 12,
        client_id: '207264e56fe348aeb7d6b3b31d31a956',
        callback: 'JSON_CALLBACK'
      };

      $http({ method: 'JSONP', url: url, params: params })
        .success(successCallback)
        .error(errorCallback);

    };

    var successCallback = function(result) {
      console.log("result is: " + result);
      if (result.meta.code == 200) {
        console.log('200');
        $scope.data = result.data;
      }

    };

    var errorCallback = function(result) {
      alert('An Error Occurred');
    };

}]);
