import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeFormComponent } from './recipe-form';

@NgModule({
  declarations: [
    RecipeFormComponent,
  ],
  imports: [
    IonicPageModule.forChild(RecipeFormComponent),
  ],
  exports: [
    RecipeFormComponent
  ]
})
export class RecipeFormComponentModule {}
