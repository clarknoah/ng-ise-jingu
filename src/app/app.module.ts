import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Services
import {FactoryService} from './service/factory.service';
import {ise_variable as ISE_VARIABLE } from './service/variable.service';
import {SingletonService} from './service/singleton.service';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login/login.component';
import { PopupDirective } from './popup.directive';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ValidationComponent } from './validation/validation.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { ParamRoutingComponent } from './param-routing/param-routing.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { HttpComponent } from './http/http.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MiscComponent } from './misc/misc.component';
import { IseJinguComponent } from './ise-jingu/ise-jingu.component';
import { LoggedInGuard } from './logged-in/logged-in.module';

export function loadFactory(){
  return new FactoryService();
}

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: IseJinguComponent},
  {path: 'content_projection', component: ContentProjectionComponent},
  {path: 'directives', component: DirectivesComponent, canActivate:[LoggedInGuard]},
  {path: 'form-control', component: FormControlComponent},
  {path: 'form-builder', component: FormBuilderComponent},
  {path: 'validation', component: ValidationComponent},
  {path: 'dependency_injection', component: DependencyInjectionComponent},
  {path: 'param_routing', component: ParamRoutingComponent},
  {path: 'input_output', component: InputOutputComponent},
  {path: 'http', component: HttpComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'misc', component: MiscComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopupDirective,
    ContentProjectionComponent,
    DirectivesComponent,
    FormControlComponent,
    FormBuilderComponent,
    ValidationComponent,
    DependencyInjectionComponent,
    ParamRoutingComponent,
    InputOutputComponent,
    HttpComponent,
    LifecycleComponent,
    MiscComponent,
    IseJinguComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
      SingletonService,
      LoggedInGuard,
      AuthService,
      {
        provide: ISE_VARIABLE,
        useValue: ISE_VARIABLE
      },
      {
        provide: FactoryService,
        useFactory: loadFactory
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
