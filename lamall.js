angular.module('lmbang',['ui.router',
'lmbang.homePage',
'lmbang.mallPage',
'lmbang.cartPage',
'lmbang.minePage'])
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home')
})
