import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent {

product: Product = new Product();
id: number;

constructor(private productService: ProductService, private route: ActivatedRoute, private routing: Router) {

}

ngOnInit(){
  this.id = this.route.snapshot.params['id'];
  this.productService.getProductById(this.id).subscribe(
    {
      next: (data) => this.product = data
      ,
      error: (errors: any) => console.log(errors)
    }
  );

  }

  onSubmit(){
   this.saveProduct()
}

saveProduct(){
  this.productService.updateProduct(this.id, this.product).subscribe(
    {
      next: (data) => this.goProductList(),
      error: (errors: any) => console.log(errors)
    }
    );
  }
  
  goProductList(){
    this.routing.navigate(['/products']);
    }

}