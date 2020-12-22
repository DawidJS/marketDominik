import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './menu/about/about.component';
import { CapComponent } from './menu/cap/cap.component';
import { HomeComponent } from './menu/home/home.component';
import { JacketComponent } from './menu/jacket/jacket.component';
import { SmthComponent } from './menu/smth/smth.component';
import { TShirtComponent } from './menu/t-shirt/t-shirt.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 't-shirt', component: TShirtComponent },
  { path: 'jacket', component: JacketComponent },
  { path: 'cap', component: CapComponent },
  { path: 'smth', component: SmthComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
