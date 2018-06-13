import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers = new Headers();
  options;

  constructor(
    private http: Http,
  ) {
    const auth = btoa('nayar:mydumbpassword');

    this.headers.append('Authorization', `Basic ${auth}`);
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

    this.options = new RequestOptions({ headers: this.headers });
  }

  /**
   * creates a base-64 encoded ASCII string from a "string" of binary data.
   * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
   */
  getInvoice() {
    const endpoint = `http://localhost:3000/api/`;

    return this.http.get('http://localhost:3000/api', this.options).pipe(
      map(res => res.json())
    );
  }
}
