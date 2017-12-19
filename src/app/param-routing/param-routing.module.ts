import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Route
} from '@angular/router';

import {ParamRoutingComponent } from './param-routing.component';
import {MainPageComponent } from './main-page/main-page.component';
import { ParamViewComponent } from './param-view/param-view.component';

@NgModule({
  declarations:[
    MainPageComponent,
    ParamViewComponent
  ],
  exports:[
    MainPageComponent,
    ParamViewComponent
  ],
  imports:[
    CommonModule,
    RouterModule
  ]
})
export class ParamRoutingModule {}
