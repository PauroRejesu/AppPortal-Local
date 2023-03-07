import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CertificateForm } from '../interfaces/certificate-form.interface';
import { Certificate } from '../models/certificate.model';

const urlRequest = environment.ws_url;

@Injectable({
  providedIn: 'root'
})
export class CertificateHospiService {

    constructor( private http: HttpClient) { }

      createCertificate( formData: CertificateForm ){
        console.log('Creando Certificado')
        
        this.http.get(`${ urlRequest }/historia=${ this.createCertificate( ) }&ingreso=9`)
      }
 

}
