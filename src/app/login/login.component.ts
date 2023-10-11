import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isValid: boolean = false
  constructor(private route: Router) {

  }
  onSubmit(username: any, password: any) {

    if (username === localStorage.getItem("userName") && password === localStorage.getItem("userPassword")) {
      this.route.navigate(["resumes"])
      //this.isValid = false

    }
    else {

      this.isValid = true;

    }
    // sessionStorage.setItem("uservalid", this.isValid.toString())
  }

  ngOnInit() {
    // if (sessionStorage.getItem("uservalid") != null) {
    //   this.isValid = sessionStorage.getItem("uservalid")

    // }
  }


}
