import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogCardsComponent } from './dog-cards/dog-cards.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
  component: DogCardsComponent,
},
{
  path: 'profile/:id',
  component: ProfileComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
