import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductsComponent } from './components/products/products.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoadingComponent,
    FooterComponent,
    SliderComponent,
    NotFoundComponent,
    AboutComponent,
    BlogComponent,
    ProductsComponent,
    SuscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
