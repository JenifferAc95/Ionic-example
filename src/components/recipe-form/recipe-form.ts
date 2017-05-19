import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe, RecipesProvider } from '../../providers/recipes/recipes';

@Component({
  selector: 'recipe-form',
  templateUrl: 'recipe-form.html'
})
export class RecipeFormComponent {

  @Input() recipe: Recipe;
  @Input() isUpdate: boolean;
  @Output() fireAction: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  submitBtn: string;

  constructor(private recipeService: RecipesProvider) {
    console.log('Hello RecipeFormComponent Component');
  }

  ngOnInit() {
    this.submitBtn = this.isUpdate ? "Update" : "Save";
  }

  processRecipe(): void {
    this.fireAction.emit(this.recipe);
  }
}
