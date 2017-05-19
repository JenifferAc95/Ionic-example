import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { Recipe, RecipesProvider } from '../../providers/recipes/recipes';

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  // recipes: Recipe[];

  /*
    constructor(public navCtrl: NavController,
      public recipeService: RecipesProvider) {
    }
  */

  //Comment or delete this line
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  /*
    ngOnInit() {
      this.recipeService.getRecipes().then(
        (recipes) => {
          console.log(recipes);
          this.recipes = recipes;
        },
        (err) => {
          console.log("Oops something is wrong!!");
        }
      );
    }
  */

}
