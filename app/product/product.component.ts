import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { clone } from 'lodash'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  productForm: boolean = false;
  editProductForm: boolean = false;
  isNewForm: boolean;
  newProduct: any = {};
  editedProduct: any = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProductsFromData();
  } 

  showEditProductForm(product: Product) {
    if(!product) {
      this.productForm = false;
      return; 
    }
    this.editProductForm = true;
    this.editedProduct = clone(product);
  }

  showAddProductForm() {
    // resets form if edited product
    if(this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  saveProduct(product: Product) {
    if(this.isNewForm) {
      // add new product
      this.productService.addProduct(product);
    } 
    this.productForm = false;
  }

  updateProduct() {
    this.productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  removeProduct(product: Product) {
    this.productService.deleteProduct(product);
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }



}