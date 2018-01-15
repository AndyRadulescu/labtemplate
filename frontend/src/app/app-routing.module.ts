import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, NavbarComponent } from './components';
import { UserComponent } from './components/pages/user/user.component';
import { GrandprixComponent } from './components/pages/grandprix/grandprix.component';
import { TicketComponent } from './components/pages/ticket/ticket.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'grandprix', component: GrandprixComponent },
  { path: 'ticket', component: TicketComponent}

  // otherwise redirect to home
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
