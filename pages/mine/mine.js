angular.module('lmbang.minePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'mine',
    url:'/mine',
    templateUrl:'pages/mine/mine.html'
  })
})
