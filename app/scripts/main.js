'use strict';

var demoApp = angular.module('demoApp', []);

demoApp.provider('FooService', function() {
  this.$get = function() {
    return {foo: this.foo};
  };
});

demoApp.config(function(FooServiceProvider) {
  FooServiceProvider.foo = 'foo service';
});

demoApp.controller('MainCtrl', function($injector) {
  //debugger;
});

demoApp.factory('BarService', function() {
  return {bar: 'bar service'};
});

demoApp.service('BazService', function() {
  this.baz = 'baz service';
});


