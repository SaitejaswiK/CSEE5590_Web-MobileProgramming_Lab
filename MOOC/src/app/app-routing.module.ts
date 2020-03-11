import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import {MusicPageComponent} from './music-page/music-page.component';
import {BigdataPageComponent} from './bigdata-page/bigdata-page.component';
import {BusinessPageComponent} from './business-page/business-page.component';
import {CloudPageComponent} from './cloud-page/cloud-page.component';
import {WebmobilePageComponent} from './webmobile-page/webmobile-page.component';
import {PhotoshopPageComponent} from './photoshop-page/photoshop-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent},
  { path: 'register-page', component: RegisterPageComponent},
  { path: 'home-page/:id', component: HomePageComponent},
  { path: 'profile-page/:id' , component: ProfilePageComponent},
  { path: 'explore-page/:id', component: ExplorePageComponent},
  { path: 'music-page/:id', component: MusicPageComponent},
  { path: 'bigdata-page/:id', component: BigdataPageComponent},
  { path: 'cloud-page/:id', component: CloudPageComponent},
  { path: 'business-page/:id', component: BusinessPageComponent},
  { path: 'webmobile-page/:id', component: WebmobilePageComponent},
  { path: 'photoshop-page/:id', component: PhotoshopPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
