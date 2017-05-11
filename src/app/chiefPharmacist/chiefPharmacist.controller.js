/**
 * Created by User on 5/10/2017.
 */
export class chiefPharmacistController {
  constructor ($http) {
    'ngInject';

    this.$http=$http;
  }

  postMessage(){
    this.$http.post('http://localhost:5000/api/message',{msg:this.message});
  }
}
