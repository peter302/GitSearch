import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class SearchedService {
private username:string
private clientid:'5bc8503b88f0083c5559'
private clientsecret:'d28bbc6426e9c7aa507f8a61d9905e6863480bf7'
  constructor(private http:HttpClient) { 
    console.log('i am ready')
    this.username="kuria"
  }

  getprofileInfo(){
    
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +this.clientid + "&client_secret=" + 
    this.clientsecret)
    
    };
    getRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" +this.clientid + "&client_secret=" + 
    this.clientsecret)
    }
    updateProfile(username:string){
      this.username=username;
    }
  }

