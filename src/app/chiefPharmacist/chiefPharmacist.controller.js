/**
 * Created by User on 5/10/2017.
 */
export class chiefPharmacistController {
  constructor ($http) {
    'ngInject';

    this.$http=$http;
    this.getMessages();
  }
  getMessages(){
      var vm=this;
      this.$http.get('http://localhost:5000/api/message').then(function (result) {
      vm.messages=result.data;
    });
  }
  postMessage(){
    this.$http.post('http://localhost:5000/api/message',{msg:this.message});
  }
}
