import { Component, OnInit } from '@angular/core';
import {Website} from "../../types/website";
import {outputAst} from "@angular/compiler";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  websitelist: Website[] = [
    {userId: '1wfkdsfojdsf',url: 'https://google.com', name: new URL('https://google.com').hostname, image:this.getFavicon('https://google.com'),status: 'Online'},
    {userId: '1wfkdsfojdsf',url: 'https://Netflix.com',name: new URL('https://Netflix.com').hostname,image:this.getFavicon('https://Netflix.com'),status: 'Online'},
    {userId: '1wfkdsfojdsf',url: 'https://youtube.com',name: new URL('https://youtube.com').hostname,image:this.getFavicon('https://youtube.com'),status: 'Online'},
    {userId: '1wfkdsfojdsf',url: 'https://facebook.com',name: new URL('https://facebook.com').hostname,image:this.getFavicon('https://facebook.com'),status: 'Online'}
  ];

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

  deleteFromWatchlist(url:string){
    let index = 0;
    this.websitelist.forEach(website => {
      if(website.url == url){
          console.log(website)
      }
    })
  }

}
