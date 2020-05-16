import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../user';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  durationInSeconds = 3;
  constructor(private _snackBar: MatSnackBar, private spinner: NgxSpinnerService, private loginService: AuthService, private router: Router) { }
  isLoggedIn: HomeComponent;
  user = new User();
  options: FormGroup;
  newUser= new User();
  ObjList;
  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {

    return this.email.hasError('email') ? 'Email incorrecto' : '';
  }

  login() {
    this.spinner.show();
    this.loginService.login(this.user).subscribe(resp => {
      const user  = JSON.parse(JSON.stringify(resp));
      console.log(user);
      console.log(user.role.id)
      if (resp != null) {
        localStorage.setItem('ROLE', 'LOGUEADO');
        this.router.navigateByUrl('/test')
        this.spinner.hide();
      } else {
        this.spinner.hide();

        this.openSnackBar('Usuario o Contraseña invalidos', 'Verifica la información');
      }
    }, error => {
      console.error(error);
    })

  }
  

  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }
}

