import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Recipe, RecipesProvider } from '../../providers/recipes/recipes';
import { RecipeAddPage } from '../recipe-add/recipe-add';

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  recipes: Recipe[];

  constructor(public navCtrl: NavController,
    public recipeService: RecipesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

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

  /*
    add() {
      this.navCtrl.push(RecipeAddPage);
    }
  */

}
