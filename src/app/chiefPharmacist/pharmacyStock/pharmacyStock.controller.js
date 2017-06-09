/**
 * Created by User on 5/10/2017.
 */
export class pharmacyStockController {
  constructor ($http) {
    'ngInject';

    this.$http=$http;
    this.getDrugs();
  }
  getDrugs(){
    var vm=this;
    this.$http.get('http://localhost:5000/api/drug').then(function (result) {
      vm.drugs=result.data;
    });
  }
  postMessage(){
    this.$http.post('http://localhost:5000/api/drug',{name:this.drug});
  }
}
