import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ProfilePage } from '../profile/profile';

@NgModule({
  declarations: [
    TabsPage,
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ]
})
export class TabsPageModule {}
