import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactoryService } from './services/factory.service';
import { SingletonService } from './services/singleton.service';
import { TEST_VARIABLE } from './services/variable';
import { AuthService } from './services/auth.service';
import { LoggedInGuard } from './services/logged-in.service';

import { LoginComponent } from './login/login.component';
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



export function loadFactory(){
  return new FactoryService();
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: IseJinguComponent},
  {path: 'content_projection', component: ContentProjectionComponent},
  {path: 'directives', component: DirectivesComponent, canActivate: [LoggedInGuard]},
  {path: 'form-control', component: FormControlComponent},
  {path: 'form-builder', component: FormBuilderComponent},
  {path: 'validation', component: ValidationComponent},
  {path: 'dependency_injection', component: DependencyInjectionComponent},
  {path: 'param_routing', component: ParamRoutingComponent},
  {path: 'input_output', component: InputOutputComponent},
  {path: 'http', component: HttpComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'misc', component: MiscComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    RouterModule.forRoot(routes)
  ],
  providers: [
    FormsModule,
    ReactiveFormsModule,
    LoggedInGuard,
    {
      provide: FactoryService,
      useFactory: loadFactory
    },
    SingletonService,
    {
      provide: TEST_VARIABLE,
      useValue: TEST_VARIABLE
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
