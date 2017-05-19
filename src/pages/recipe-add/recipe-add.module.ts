import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeAddPage } from './recipe-add';

@NgModule({
  declarations: [
    RecipeAddPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeAddPage),
  ],
  exports: [
    RecipeAddPage
  ]
})
export class RecipeAddPageModule {}
