angular.module('lmbang.mallPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'mall',
    url:'/mall',
    templateUrl:'pages/mall/mall.html'
  })
})
