import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../app/environment/environment';
import { AES } from 'crypto-js';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http: HttpClient = inject(HttpClient)
  private baseUrl = environment.BASEURL;

  // npm i crypto-js
  // encryption
  encryptData(value: any) {
    return AES.encrypt(
      JSON.stringify(value), environment.SECRETKEY
    ).toString();
  }

  // decryption
  decryptData(value: any) {
    return JSON.parse(
      AES.decrypt(value.data, environment.SECRETKEY)
        .toString(CryptoJS.enc.Utf8)
    )
  }
}
