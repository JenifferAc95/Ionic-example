import { Component } from '@angular/core';
import { Recipe } from '../../providers/recipes/recipes';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recipe-info',
  templateUrl: 'recipe-info.html',
})
export class RecipeInfoPage {

  recipe: Recipe;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeModalInfoPage');
  }


  ngOnInit() {
    this.recipe = this.navParams.get("recipe");
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
