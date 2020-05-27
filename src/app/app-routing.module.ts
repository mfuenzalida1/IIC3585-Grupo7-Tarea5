import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeListComponent } from './joke-list/joke-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full' },
  { path: 'jokes', component: JokeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
