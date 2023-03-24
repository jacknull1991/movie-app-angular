import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBar } from './layout/nav.component';
import { MovieComponent } from './layout/movie-card.component';
import { IndexComponent } from './views/index.component';
import { AboutComponent } from './views/about.component';
import { Page404 } from './views/404.comopnent';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBar,
    MovieComponent,
    IndexComponent,
    AboutComponent,
    Page404
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
