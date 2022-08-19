import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'booked-flights', redirectTo: 'booked-flights/index', pathMatch: 'full'},
  { path: 'booked-flights/index', component: IndexComponent},
  { path: 'booked-flights/create', component: CreateComponent},
  { path: 'booked-flights/view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookedFlightsRoutingModule { }
