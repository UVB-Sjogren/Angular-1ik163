import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { KatterComponent } from './katter/katter.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ElsaComponent } from './katter/elsa/elsa.component';
import { HugoComponent } from './katter/hugo/hugo.component';
import { TuvaComponent } from './katter/tuva/tuva.component';
import { ValkommenComponent } from './landing/valkommen/valkommen.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { KontaktaComponent } from './landing/kontakta/kontakta.component';

const lankar: Routes = [
  {path:'landing/valkommen', component: ValkommenComponent },
  {path:'landing/login', component: LoginComponent},
  {path:'landing/register', component: RegisterComponent},
  {path:'landing/kontakta', component: KontaktaComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    KatterComponent,
    SidenavComponent,
    ElsaComponent,
    HugoComponent,
    TuvaComponent,
    ValkommenComponent,
    LoginComponent,
    RegisterComponent,
    KontaktaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(lankar)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
