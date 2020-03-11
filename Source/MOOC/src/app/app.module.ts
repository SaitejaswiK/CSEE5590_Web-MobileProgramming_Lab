import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { CloudPageComponent } from './cloud-page/cloud-page.component';
import { BigdataPageComponent } from './bigdata-page/bigdata-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { WebmobilePageComponent } from './webmobile-page/webmobile-page.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { PhotoshopPageComponent } from './photoshop-page/photoshop-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    ExplorePageComponent,
    CloudPageComponent,
    BigdataPageComponent,
    MusicPageComponent,
    WebmobilePageComponent,
    BusinessPageComponent,
    PhotoshopPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
