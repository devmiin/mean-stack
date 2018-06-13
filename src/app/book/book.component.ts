import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    private http: Http,
  ) { }

  ngOnInit() {
    const headers = new Headers();
    headers.append('Authorization', `Basic YWxhZGRpbjpvcGVuc2VzYW1l`);
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    const options = new RequestOptions({ headers: headers });

    this.http.get('http://localhost:3000/api', options).pipe(
      map(m => m)
    )
    .subscribe(s => console.log(s.json()));
  }

}
