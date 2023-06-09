import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { MyhomeComponent } from './myhome/myhome.component';
import { ProfileComponent } from './profile/profile.component';
import { GsignComponent } from './gsign/gsign.component';
const routes: Routes = [
  { path: '', component: MyhomeComponent},
  { path: 'about', component: AboutComponent,canActivate:[AuthGuard]},
  { path: 'contact', component: ContactComponent,canActivate:[AuthGuard] },
  { path: 'form', component: ReactiveFormComponent,canActivate:[AuthGuard]},
  { path: 'search-results/:searchTerm',canActivate:[AuthGuard] },
  { path: 'bar-graph', component: BarGraphComponent,canActivate:[AuthGuard]},
  { path: 'search', component: SearchComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  {path:'home',component:HomeComponent},
  {path:'myhome',component:MyhomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'gsign',component:GsignComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
