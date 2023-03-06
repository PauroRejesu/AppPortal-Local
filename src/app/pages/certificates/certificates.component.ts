import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styles: [
  ]
})
export class CertificatesComponent {

 
  public certificatesForms = this.fb.group({

    typeDocument:  ['CC', [ Validators.required, Validators.minLength(2), Validators.maxLength(2) ]],
    id:  [123456789, [ Validators.required ]],
    history: [123456, [Validators.required]],
    income: [1, [Validators.required]]
    

  })

  constructor (private fb: FormBuilder){ }

  createCertificate(){

    console.log(this.certificatesForms.value);
  }

}
