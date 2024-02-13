import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { AppartementComponent } from './appartement/appartement.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppaetementComponent } from './appaetement/appaetement.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AnnonceModule } from './annonce/annonce.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ResidencesComponent,
    AppartementComponent,
    HomeComponent,
    NotfoundComponent,
    AppaetementComponent,
    ResidenceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AnnonceModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
