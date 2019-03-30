import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  count: number;
  private products: Product[];

  constructor(private productService: ProductService, private appservice: AppService) { 

  }

  ngOnInit() {
    this.products = this.productService.findAll();
    this.appservice.count.subscribe(c => {
      this.count =c;
  });
}
  changeValue(){
    this.appservice.changeValue();
  }
  removeValue(){
    this.appservice.removeValue();
  }

}
