import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductRegisterPage } from './product-register';

@NgModule({
  declarations: [
    ProductRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductRegisterPage),
  ],
})
export class ProductRegisterPageModule {}
