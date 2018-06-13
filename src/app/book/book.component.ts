import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    private service: ServiceService,
  ) { }

  ngOnInit() {
    this.service.getInvoice()
    .subscribe(res => console.log(res));
  }

}
