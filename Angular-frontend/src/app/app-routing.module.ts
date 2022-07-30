import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTouristComponent } from './create-tourist/create-tourist.component';
import { Tourist } from './tourist';
import { TouristDetailsComponent } from './tourist-details/tourist-details.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';
import { UpdateTouristComponent } from './update-tourist/update-tourist.component';

const routes: Routes = [
  {path: 'tourists', component: TouristListComponent},
  {path: 'create-tourist', component: CreateTouristComponent},
  {path: '', redirectTo: 'tourists', pathMatch: 'full'},
  {path: 'update-tourist/:id', component:UpdateTouristComponent},
  {path: 'tourist-details/:id', component:TouristDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ Tourist,   TouristListComponent]
