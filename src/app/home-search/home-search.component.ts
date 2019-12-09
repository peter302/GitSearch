import { Component, OnInit } from '@angular/core';
import { SearchedService } from '../git-search/searched.service';
@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
      profile:any[];
      repos:any[];
      username:string;
  constructor(private searchservice:SearchedService) {
 
  }
    searchProfile(){
      this.searchservice.getprofileInfo().subscribe(profile=>{
        console.log(profile)
        this.profile=profile
      })
      this.searchservice.getRepos().subscribe(Repos=>{
        console.log(Repos)
        this.repos=Repos
     })
      this.searchservice.updateProfile(this.username)
    }

  ngOnInit() {
  }

}
