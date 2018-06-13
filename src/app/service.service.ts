import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: Http,
  ) { }

  /**
   * creates a base-64 encoded ASCII string from a "string" of binary data.
   * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
   */
  getInvoice() {
    const auth = btoa('nayar:mydumbpassword');

    const headers = new Headers();
    headers.append('Authorization', `Basic ${auth}`);
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    const options = new RequestOptions({ headers: headers });

    const endpoint = `http://localhost:3000/api/`;

    return this.http.get('http://localhost:3000/api', options).pipe(
      map(res => res.json())
    );
  }
}
