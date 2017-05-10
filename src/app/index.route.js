export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('assistantPharmacist', {
      url: '/assistantPharmacist',
      templateUrl: 'app/assistantPharmacist/assistantPharmacist.html',
      controller: 'assistantPharmacistController',
      controllerAs: 'assistantPharmacist'
    });

  $urlRouterProvider.otherwise('/');
}
