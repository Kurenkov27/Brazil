import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressSpinnerModule }from '@angular/material/progress-spinner'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './page/blog/blog.component';
import { PhotosComponent } from './page/photos/photos.component';
import { GirlsComponent } from './page/girls/girls.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './about/history/history.component';
import { PlacesComponent } from './about/places/places.component';
import { BeachesComponent } from './about/beaches/beaches.component';
import { FoodComponent } from './about/food/food.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostsService } from './posts/posts.service';
import { HttpClientModule } from "@angular/common/http"

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
    FoodComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
