import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { RecipeAddPage } from '../pages/recipe-add/recipe-add';
import { RecipesProvider } from '../providers/recipes/recipes';
import { RecipeFormComponent } from '../components/recipe-form/recipe-form';
import { RecipeInfoPage } from '../pages/recipe-info/recipe-info';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RecipeFormComponent,
    RecipeAddPage,
    RecipeInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RecipeAddPage,
    RecipeInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RecipesProvider
  ]
})
export class AppModule { }
