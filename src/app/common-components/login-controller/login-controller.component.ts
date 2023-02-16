import { Component } from '@angular/core';
import { UserDataServiceService } from 'src/user-services/user-data-service.service';

@Component({
  selector: 'app-login-controller',
  templateUrl: './login-controller.component.html',
  styleUrls: ['./login-controller.component.scss']
})
export class LoginControllerComponent {
  public constructor(private userService:UserDataServiceService){

  }
}
