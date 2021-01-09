import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionService } from './gestion.service';
import { RechercheComponent } from './recherche/recherche.component';
import { TypepfeComponent } from './typepfe/typepfe.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListeComponent,
    RechercheComponent,
    TypepfeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
