import { Component, OnInit } from '@angular/core';
import { SearchedService } from '../git-search/searched.service';
@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  constructor(private searchservice:SearchedService) {
    this.searchservice.showProfile().subscribe(profile=>{
      console.log(profile)
    })
   }

  ngOnInit() {
  }

}
