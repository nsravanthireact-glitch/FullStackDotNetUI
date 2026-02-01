
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent implements OnInit {

  pricing: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:5000/api/pricing')
      .subscribe(data => this.pricing = data);
  }
}
