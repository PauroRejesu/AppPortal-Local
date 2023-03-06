import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: [ './admissions.component.css',
  ]
})
export class AdmissionsComponent {

 
  public admissionsForm = this.fb.group({

    typeDocument:  ['CC', [ Validators.required, Validators.minLength(2), Validators.maxLength(2) ]],
    id:  [123456789, [ Validators.required ]],
    history: [123456, [Validators.required]],
    income: [1, [Validators.required]]
    

  })

  constructor (private fb: FormBuilder){ }

  createCertificate(){

    console.log(this.admissionsForm.value);
  }

}
