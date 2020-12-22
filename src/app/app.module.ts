import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './menu/home/home.component';
import { TShirtComponent } from './menu/t-shirt/t-shirt.component';
import { JacketComponent } from './menu/jacket/jacket.component';
import { CapComponent } from './menu/cap/cap.component';
import { SmthComponent } from './menu/smth/smth.component';
import { AboutComponent } from './menu/about/about.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    TShirtComponent,
    JacketComponent,
    CapComponent,
    SmthComponent,
    AboutComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
