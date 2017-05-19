import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Recipe, RecipesProvider } from '../../providers/recipes/recipes';
import { RecipeAddPage } from '../recipe-add/recipe-add';
// import { ModalController } from 'ionic-angular';
import { RecipeInfoPage } from '../recipe-info/recipe-info';


@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  recipes: Recipe[];

/*
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public recipeService: RecipesProvider) {}
*/

constructor(public navCtrl: NavController,
  public recipeService: RecipesProvider) {}

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

  add() {
    this.navCtrl.push(RecipeAddPage);
  }

/*
  presentRecipeModal(recipe) {
    let recipeModal = this.modalCtrl.create(RecipeInfoPage, {
      recipe: recipe
    });
    recipeModal.present();
  }
*/

}
