import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Website} from "../../types/website";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnChanges {

  @Input()
  watchlistItems: Website[] = []

  @Input()
  query: string = ""

  showNoResult: boolean = false

  watchlistItemsFiltered: Website[] = []

  constructor() { }

  ngOnChanges(changes:SimpleChanges): void {
    let currentQuery = ''
    if (changes['query']) {
      currentQuery = changes['query'].currentValue
    }
    if (this.watchlistItems.length > 0) {
      if (currentQuery !== "") {
        this.watchlistItemsFiltered = this.watchlistItems.filter(it => it.url.toUpperCase().includes(currentQuery.toUpperCase()))
        console.log(this.watchlistItemsFiltered)
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
