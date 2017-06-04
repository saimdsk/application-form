var app = angular.module('DynamicFormApp', []);

  app.controller('DynamicFormController',  function getData($scope, $http, $log) {
      // we would get this from the api

               $http.get('test.json').success(function(response)
    {

      $scope.entity=response;

    });
      $scope.submitForm = function() {};
  }).directive("dynamicName", function($compile) {
      return {
          restrict: "A",
          terminal: true,
          priority: 1000,
          link: function(scope, element, attrs) {
              element.attr('name', scope.$eval(attrs.dynamicName));
              element.removeAttr("dynamic-name");
              $compile(element)(scope);
          }
      };
  });
