import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { SearchedService } from './git-search/searched.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SearchedService],
  bootstrap: [AppComponent]

})
export class AppModule { }
