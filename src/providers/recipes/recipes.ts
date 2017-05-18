import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

export class Recipe {
  constructor(
    public id?: number,
    public name?: string,
    public ingredients?: string,
    public instructions?: string
  ) { }
}

const RECIPES: Recipe[] = [];
const FETCH_LATENCY = 500;

let recipe1: Recipe = new Recipe(1, "Recipe 1", "Ingredient 1, Ingredient 2, Ingredient 3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let recipe2: Recipe = new Recipe(2, "Recipe 2", "Ingredient 1, Ingredient 2, Ingredient 3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let recipe3: Recipe = new Recipe(3, "Recipe 3", "Ingredient 1, Ingredient 2, Ingredient 3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let recipe4: Recipe = new Recipe(4, "Recipe 4", "Ingredient 1, Ingredient 2, Ingredient 3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let recipe5: Recipe = new Recipe(5, "Recipe 5", "Ingredient 1, Ingredient 2, Ingredient 3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let recipe6: Recipe = new Recipe(6, "Recipe 6", "Ingredient 1, Ingredient 2, Ingredient 3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let recipe7: Recipe = new Recipe(7, "Recipe 7", "Ingredient 1, Ingredient 2, Ingredient 3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

RECIPES.push(recipe1);
RECIPES.push(recipe2);
RECIPES.push(recipe3);
RECIPES.push(recipe4);
RECIPES.push(recipe5);
RECIPES.push(recipe6);
RECIPES.push(recipe7);

@Injectable()
export class RecipesProvider {

  constructor() {
    console.log('Hello RecipesProvider Provider');
  }

  addRecipe(recipe): void {
    let recipeId = RECIPES.reduce((max, recipe) => Math.max(recipe.id, max), -1) + 1;
    recipe.id = recipeId;
    RECIPES.push(recipe);
  }

  getRecipes(): Promise<Recipe[]> {
    return new Promise<Recipe[]>(resolve => {
      setTimeout(() => {
        resolve(RECIPES);
      }, FETCH_LATENCY);
    })
  }

  getRecipe(id: number | string): Promise<Recipe> {
    return new Promise<Recipe>(resolve => {
      setTimeout(() => {
        resolve(RECIPES.filter(recipe => recipe.id === +id)[0]);
      }, FETCH_LATENCY);
    })
  }

  removeRecipe(id: number | string): void {
    let recipeIdx = +id - 1;
    RECIPES.splice(recipeIdx, 1);
  }

}
