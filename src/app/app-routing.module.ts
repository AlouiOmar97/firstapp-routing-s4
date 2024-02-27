import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { AppartementComponent } from './appartement/appartement.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddAppartmentComponent } from './add-appartment/add-appartment.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"residence", component:ResidencesComponent},
  {path:"residence/details/:id", component:ResidenceDetailsComponent},
  {path:"appartment/add", component: AddAppartmentComponent},
  {path:"appartment/:id", component: AppartementComponent},
  {path:"**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
