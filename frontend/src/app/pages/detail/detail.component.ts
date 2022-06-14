import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {catchError, first, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Response} from "../../types/Response";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  url: string = ''
  gotPing = false
  ping: number = 0
  online = false
  host = ''
  isGenerating = false
  hasGenerated = false

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const parsedUrl = this.router.parseUrl(this.router.url)
    if (parsedUrl.queryParams['url']) {
      this.url = parsedUrl.queryParams['url']
      this.host = new URL(this.url).host
    } else {
      this.router.navigate(['dashboard'])
    }
    this.getPing()
  }

  getPing() {
    const now = Date.now()
    this.httpClient.get(this.url, {observe: "response"})
      .pipe(first()).subscribe(
      () => {
        console.log("moin")
        this.ping = Date.now() - now
        this.gotPing = true
        this.online = true
      },
      () => {
        console.log("moin")
        this.ping = Date.now() - now
        this.gotPing = true
        this.online = true
      }
    )
  }


  generateReport() {
    this.isGenerating = true
    let headers = new HttpHeaders();
    headers = headers.set('key', environment.apikey);

    this.httpClient.get<Response>(environment.api, {headers: headers}).subscribe(
    (response) => {
        console.log(response.lighthouseResult.audits["first-meaningful-paint"])
      },
      (error) => {
        console.log("error occured")
        return error
      }
    )

  }
}



