import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { Recipe, RecipesProvider } from '../../providers/recipes/recipes';
// import { RecipesPage } from '../recipes/recipes';

@IonicPage()
@Component({
  selector: 'page-recipe-add',
  templateUrl: 'recipe-add.html',
})
export class RecipeAddPage {

  /*
    recipe: Recipe = new Recipe();
    constructor(
      public navCtrl: NavController,
      private recipeService: RecipesProvider
    ) { }
  */

  /*
    save(recipe) {
      this.recipeService.addRecipe(recipe);
      this.navCtrl.push(RecipesPage);
    }
  */

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeAddPage');
  }

}
