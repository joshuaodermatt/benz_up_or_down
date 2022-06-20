import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Website} from "../../types/website";
import {Router} from "@angular/router";

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

  @Output()
  delete: EventEmitter<string> = new EventEmitter<string>()

  showNoResult: boolean = false

  watchlistItemsFiltered: Website[] = []

  constructor(
    private router: Router
  ) { }

  ngOnChanges(changes:SimpleChanges): void {
    let currentQuery = ''
    if (changes['query']) {
      console.log('query changed')
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

    if (changes['watchlistItems']) {
      console.log('changes')
      this.watchlistItems = changes['watchlistItems'].currentValue
      this.watchlistItemsFiltered = this.watchlistItems
    }
  }

  onDelete(url: string) {
    this.delete.emit(url)
  }

  onDetail(url: string) {
    this.router.navigateByUrl(`detail?url=${url}`)
  }
}
