import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'passengers', redirectTo: 'passengers/index', pathMatch: 'full'},
  { path: 'passengers/index', component: IndexComponent},
  { path: 'passengers/create', component: CreateComponent},
  { path: 'passengers/update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengersRoutingModule { }
