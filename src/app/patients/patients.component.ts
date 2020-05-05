import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  options: FormGroup;
  title = 'Patients';
  patient = {
    documentNumber: "",
    fullName: "",
    direction: "",
    phone: "",
    email: "",
    documentType: {
      id: "0",
    },
    town: {
      id: "",
      
    },
    department: {
      id: "",
    },
    state: {
      id: "",
    }


  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    
    return this.email.hasError('email') ? 'Email incorrecto' : '';
  }
  
  create() {
    console.log(this.patient);
  }
  


}
