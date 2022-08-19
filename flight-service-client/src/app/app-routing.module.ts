import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './passengers/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'passengers', pathMatch: 'full'},
  { path: 'passengers', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
