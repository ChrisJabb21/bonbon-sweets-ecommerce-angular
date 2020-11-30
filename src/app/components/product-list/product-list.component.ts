import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  loading = false;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.loading = true; 
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.loading = false;
        this.products = products;
      });
    }
  }
