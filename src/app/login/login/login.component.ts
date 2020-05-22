import { Component, OnInit } from "@angular/core";

import { LoginService } from "src/app/services/login.service";
import { NgForm } from "@angular/forms";
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { MainDashbordComponent } from "src/app/Dashbord/main-dashbord/main-dashbord.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  loginResponce: any;
  isheader: boolean;
  msg: string;
  error: boolean = false;
  errorcolor:boolean;
  loginuser: boolean;
  constructor(private _LoginService: LoginService, private _Router: Router) {}

  ngOnInit(): void {
    // this.isheader= localStorage.setItem("obj", JSON.stringify(this.family));
  }

  loginUser = (loginForm: any) => {
    let uname = "admin";
    let pass = "admin";
    let uname1 = loginForm.form.value.password;
    let pass1 = loginForm.form.value.userLoginId;
    if (uname == uname1 && pass == pass1) {
        this._Router.navigate(["/dashbord"]);
    } else {
      this.error = true;
      this.msg = "The username & password is incorrect";
      {
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
    }
    // this.loginResponce= this._LoginService.getLoginDetails(loginForm.value);
    // this.loginResponce? alert("Login Successful"):alert("Invalid username/password");
    // loginForm.reset();
  };

  forgotPassword = () => this._Router.navigate(["/forgetPassword"]);

  ragisterUser = () => this._Router.navigate(["/ragisterUser"]);
}
