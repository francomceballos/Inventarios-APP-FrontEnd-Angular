import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService){}
  
  ngOnInit() {
    this.getProducts();
  }

private getProducts(){
  this.productService.getProductsList().subscribe(data => {
    this.products = data;
  });
}
}
