import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-troubleshooting',
  templateUrl: './troubleshooting.component.html',
  styleUrls: ['./troubleshooting.component.css']
})
export class TroubleshootingComponent implements OnInit {

  public env: any;

  constructor(public router: Router) {

    this.env = environment;

    let errorMessages = [];

    console.log('AppComponent: Checking configuration values.');

    if(!environment.cognitoIdentityPoolId) {
      errorMessages.push("Cognito Identity Pool not configured!\n\t The id is available in cloud formation output section.\n");
    }

    if(!environment.facebookAppId) {
      errorMessages.push("Facebook App Id not configured! \n\t This is the ID from your facebook developer portal.\n");
    }

    if(!environment.ticketAPI) {
      errorMessages.push("Ticket API not configured!");
    }

    console.log(errorMessages.join("\n"));

    if(errorMessages.length <= 0 ){
      this.router.navigate(['/home']);
    }

  }

  ngOnInit() {



  }

}