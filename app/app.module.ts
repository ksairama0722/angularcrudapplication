import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
