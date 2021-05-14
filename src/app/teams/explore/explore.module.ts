import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';
import {TeamElementComponent} from '../team-element/team-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePageRoutingModule
  ],
  exports: [
    TeamElementComponent
  ],
  declarations: [ExplorePage, TeamElementComponent]
})
export class ExplorePageModule {}
