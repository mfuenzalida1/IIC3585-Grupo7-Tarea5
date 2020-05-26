import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { JokeListComponent } from './joke-list/joke-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full' },
  { path: 'jokes', component: JokeListComponent},
  { path: 'joke/:id', component: JokeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
