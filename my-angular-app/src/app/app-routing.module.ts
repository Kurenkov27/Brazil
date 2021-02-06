import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BeachesComponent } from './about/beaches/beaches.component';
import { BlogComponent } from './blog/blog.component';
import { FoodComponent } from './about/food/food.component';
import { GirlsComponent } from './girls/girls.component';
import { HistoryComponent } from './about/history/history.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PlacesComponent } from './about/places/places.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "photos",
    component: PhotosComponent
  },
  {
    path: "girls",
    component: GirlsComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "about/history",
    component: HistoryComponent
  },
  {
    path: "about/places",
    component: PlacesComponent
  },
  {
    path: "about/beaches",
    component: BeachesComponent
  },
  {
    path: "about/food",
    component: FoodComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
