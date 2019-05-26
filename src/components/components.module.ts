import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards';
import { ProductSelectorComponent } from './product-selector/product-selector';
@NgModule({
	declarations: [CardsComponent,
    ProductSelectorComponent],
	imports: [],
	exports: [CardsComponent,
    ProductSelectorComponent]
})
export class ComponentsModule {}
