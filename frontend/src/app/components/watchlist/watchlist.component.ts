import { Component, OnInit, Input } from '@angular/core';
import {Website} from "../../types/website";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  @Input()
  watchlistItems: Website[] = []

  @Input()
  query: string = ""

  showNoResult: boolean = false

  watchlistItemsFiltered: Website[] = []

  constructor() { }

  ngOnInit(): void {
    if (this.watchlistItems.length > 0) {
      if (this.query !== "") {
        this.watchlistItemsFiltered = this.watchlistItems.filter(it => {it.url.toUpperCase().includes(this.query.trim().toUpperCase())})
        if(this.watchlistItemsFiltered.length === 0) {
          this.showNoResult = true
        }
      } else {
        this.watchlistItemsFiltered = this.watchlistItems
      }
    } else {
      this.showNoResult = true
    }
  }

}
