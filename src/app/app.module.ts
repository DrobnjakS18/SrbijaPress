import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes : Routes = [
  {
    path : '',
    redirectTo: 'pocetna',
    pathMatch: 'full'
  },
  {
    path: 'pocetna',
    component: RouteComponent,
    children: [
      {
        path: '',
        loadChildren: './pocetna/pocetna.module#PocetnaModule'  
      }
    ]
  },

  {
    path : 'galerija',
    redirectTo: 'galerija',
    pathMatch: 'full'
  },
  {
    path: 'galerija',
    component: RouteComponent,
    children: [
      {
        path: '',
        loadChildren: './galerija/galerija.module#GalerijaModule'  
      }
    ]
  },
  
  {
    path : 'kontakt',
    redirectTo: 'kontakt',
    pathMatch: 'full'
  },
  {
    path: 'kontakt',
    component: RouteComponent,
    children: [
      {
        path: '',
        loadChildren: './kontakt/kontakt.module#KontaktModule'  
      }
    ]
  },

 
]

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
