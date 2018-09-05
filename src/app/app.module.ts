import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InstagramComponent } from './components/instagram/instagram.component';
import { LoginComponent } from './components/login/login.component';

const routeTable : Route[] = [
      {
        path:'',
        redirectTo:'/home',
        pathMatch: 'full',  
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'instagram/:name',
        component: InstagramComponent
      },
      {
        path:'login',
        component: LoginComponent
      }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstagramComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
