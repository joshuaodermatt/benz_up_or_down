import { Component, OnInit } from '@angular/core';
import {Website} from "../../types/website";
import {outputAst} from "@angular/compiler";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  websitelist: Website[] = [];

  AddWebsite: string = '';


  addWatchListToLocalStorage() {
    localStorage.setItem('watchlist', JSON.stringify(this.websitelist));
  }

  getWatchListFromLocalStorage() {
    return JSON.parse(localStorage.getItem('watchlist') || '');
  }

  getFavicon(url:string){
    return 'https://www.google.com/s2/favicons?domain='+url+'&sz=128';
  }

  input : string = '';

  constructor() {}

  ngOnInit(): void {
    this.websitelist = this.getWatchListFromLocalStorage();
  }

  AddToWatchlist(){
    this.websitelist.push({
      userId: '1wfkdsfojdsf',url: this.AddWebsite, name: new URL(this.AddWebsite).hostname, image:this.getFavicon(this.AddWebsite),status: 'Online'
    });
    this.addWatchListToLocalStorage();
  }

  deleteFromWatchlist(url:string) {
    console.log('deleting')
    console.log(url)
    this.websitelist = this.websitelist.filter(it => it.url !== url)
    this.addWatchListToLocalStorage()
  }

}
