import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService,
    private routing: Router ){}
  
  ngOnInit() {
    this.getProducts();
  }

private getProducts(){
  this.productService.getProductsList().subscribe(data => {
    this.products = data;
  });
}

  editProduct(id: number){
    this.routing.navigate(['edit-product', id]);
  }

}
