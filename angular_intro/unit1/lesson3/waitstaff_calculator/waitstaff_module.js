var myApp = angular.module('waitstaffCalculator',[]);

myApp.controller('mainController', ['$scope', function($scope) {
    $scope.show_inputs = true;
    $scope.title = 'Waitstaff Calculator';

    $scope.mealInfo = {
      price: { title: 'Base Meal Price', value: 0 },
      taxRate: { title: 'Tax Rate', value: 0 },
      tipRate: { title: 'Tip Percentage', value: 0 }
    };

    $scope.charges = {
      subtotal: 0,
      tip: 0,
      total: 0
    };

    $scope.summary = {
      tipTotal: { title: 'Tip Total', value: 0 },
      mealCount: { title: 'Meal Count', value: 0 },
      averageTip: { title: 'Average Tip Per Meal', value: 0 }
    };

    $scope.numMeals = 0;

    $scope.reset = function() {
      console.log('will set show_inputs to true');
      $scope.show_inputs = true;
    };

    $scope.submitFunc = function(valid) {
      if (valid) {
        $scope.updateCustomerCharges();
        $scope.updateSummary();
        $scope.resetMealInfo();
      } else {
        console.log('The form is invalid');
      }
    };

    $scope.updateCustomerCharges = function() {
      taxRate = parseInt($scope.mealInfo.taxRate.value) / 100;
      subtotal = parseInt($scope.mealInfo.price.value) * (1 + taxRate);
      $scope.charges.subtotal = parseFloat(subtotal.toFixed(2));

      tipRate = parseInt($scope.mealInfo.tipRate.value) / 100;
      tipAmount = $scope.charges.subtotal * tipRate;
      $scope.charges.tip = parseFloat(tipAmount.toFixed(2));

      $scope.charges.total = $scope.charges.subtotal + $scope.charges.tip;
    };

    $scope.updateSummary = function() {
      $scope.summary.mealCount.value += 1;
      $scope.summary.tipTotal.value += $scope.charges.tip;
      $scope.summary.tipTotal.value = parseFloat($scope.summary.tipTotal.value.toFixed(2)); 
      averageTip = ($scope.summary.tipTotal.value / $scope.summary.mealCount.value)
      $scope.summary.averageTip.value = parseFloat(averageTip.toFixed(2));
    };

    $scope.resetMealInfo = function() {
      $scope.mealInfo.price.value = 0
      $scope.mealInfo.taxRate.value = 0
      $scope.mealInfo.tipRate.value = 0
    };

    $scope.resetCharges = function() {
      $scope.charges.subtotal = 0
      $scope.charges.tip = 0
      $scope.charges.total = 0
    };

    $scope.resetSummary = function() {
      $scope.summary.tipTotal.value = 0
      $scope.summary.mealCount.value = 0
      $scope.summary.averageTip.value = 0
    };

    $scope.resetAll = function() {
      $scope.resetMealInfo();
      $scope.resetCharges();
      $scope.resetSummary();
    };

}]);
