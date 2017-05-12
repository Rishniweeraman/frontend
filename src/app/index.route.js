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
    })
      .state('pharmacyStock', {
      url: '/chiefPharmacist/pharmacyStock',
      templateUrl: 'app/chiefPharmacist/pharmacyStock/pharmacyStock.html',
      controller: 'pharmacyStockController',
      controllerAs: 'pharmacyStock'
    })
      .state('addDrugs', {
      url: '/chiefPharmacist/addDrugs',
      templateUrl: 'app/chiefPharmacist/addDrugs/addDrugs.html',
      controller: 'addDrugsController',
      controllerAs: 'addDrugs'
    })
      .state('addNewBatch', {
      url: '/chiefPharmacist/addNewBatch',
      templateUrl: 'app/chiefPharmacist/addNewBatch/addNewBatch.html',
      controller: 'addNewBatchController',
      controllerAs: 'addNewBatch'
    })
    .state('drugInformation', {
      url: '/chiefPharmacist/drugInformation',
      templateUrl: 'app/chiefPharmacist/drugInformation/drugInformation.html',
      controller: 'drugInformationController',
      controllerAs: 'drugInformation'
    })
    .state('reports', {
      url: '/chiefPharmacist/reports',
      templateUrl: 'app/chiefPharmacist/reports/reports.html',
      controller: 'reportsController',
      controllerAs: 'reports'
    })
    .state('updateDrugs', {
      url: '/chiefPharmacist/updateDrugs',
      templateUrl: 'app/chiefPharmacist/updateDrugs/updateDrugs.html',
      controller: 'updateDrugsController',
      controllerAs: 'updateDrugs'
    })
    .state('viewRequests', {
      url: '/chiefPharmacist/viewRequests',
      templateUrl: 'app/chiefPharmacist/viewRequests/viewRequests.html',
      controller: 'viewRequestsController',
      controllerAs: 'viewRequests'

    });

  $urlRouterProvider.otherwise('/');
}
