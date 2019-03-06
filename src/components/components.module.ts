import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards';
import { ButtonsComponent } from './buttons/buttons';
@NgModule({
	declarations: [CardsComponent,
    ButtonsComponent],
	imports: [],
	exports: [CardsComponent,
    ButtonsComponent]
})
export class ComponentsModule {}
