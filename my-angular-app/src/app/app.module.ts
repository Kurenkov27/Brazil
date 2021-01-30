import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PhotosComponent } from './photos/photos.component';
import { GirlsComponent } from './girls/girls.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { PlacesComponent } from './places/places.component';
import { BeachesComponent } from './beaches/beaches.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PhotosComponent,
    GirlsComponent,
    AboutComponent,
    HistoryComponent,
    PlacesComponent,
    BeachesComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
