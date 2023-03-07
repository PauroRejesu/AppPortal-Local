import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CertificateHospiService } from 'src/app/services/certificate-hospi.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styles: [
  ]
})
export class CertificatesComponent {

  public formSumited = false;
  
 
  public certificatesForms = this.fb.group({
    history: [123456, Validators.required],
    income: [1, Validators.required]
  })

  constructor (private fb: FormBuilder,
               private certificateService: CertificateHospiService){ }

  createCertificate(){
    if (this.certificatesForms.invalid){
      return 
    }

    this.certificateService.createCertificate(this.certificatesForms.value);
    //this.formSumited = true;
    //console.log(this.certificatesForms.value);

  }

  //Validate fields with ngIf
  invalidField(field: string ):boolean{

    if (this.certificatesForms.get(field)?.invalid && this.formSumited){
        return true;
    }
    return false;

  }

}
