import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import{HttpClient} from '@angular/common/http'
import{FormsModule} from '@angular/forms' 
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
    AppRoutingModule,
    HttpClientModule,
  
    FormsModule
  ],
  providers: [SearchedService],
  bootstrap: [AppComponent]

})
export class AppModule { }
