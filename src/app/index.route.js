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
    })
      .state('chiefPharmacist', {
      url: '/chiefPharmacist',
      templateUrl: 'app/chiefPharmacist/chiefPharmacist.html',
      controller: 'chiefPharmacistController',
      controllerAs: 'chiefPharmacist'
    })
      .state('doctor', {
      url: '/doctor',
      templateUrl: 'app/doctor/doctor.html',
      controller: 'doctorController',
      controllerAs: 'doctor'
    })
    .state('authenticate', {
      url: '/authenticate',
      templateUrl: 'app/authenticate/authenticate.html',
      controller: 'authenticateController',
      controllerAs: 'authenticate'
    });

  $urlRouterProvider.otherwise('/');
}
