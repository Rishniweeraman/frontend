/**
 * Created by User on 5/11/2017.
 */
export class drugInformationController {
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

}
