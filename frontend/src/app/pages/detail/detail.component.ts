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
  report: Response = {
    lighthouseResult: {
      audits: {
        'speed-index': {
          title: '',
          description: '',
          score: 0,
          displayValue: ''
        },
        'modern-image-formats': {
          title: '',
          description: '',
          score: 0,
          displayValue: ''
        },
        'first-meaningful-paint': {
          title: '',
          description: '',
          score: 0,
          displayValue: ''
        },
        'third-party-summary': {
          title: '',
          description: '',
          score: 0,
          displayValue: ''
        },
        'server-response-time': {
          title: '',
          description: '',
          score: 0,
          displayValue: ''
        },
        'bootup-time': {
          title: '',
          description: '',
          score: 0,
          displayValue: ''
        },
        redirects: {
          title: '',
          description: '',
          score: 0,
          displayValue: ''
        }
      }
    }
  }

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

    this.httpClient.get<Response>(environment.api + '?url=' + this.url).subscribe(
    (response) => {
        this.report = response
        this.hasGenerated = true
        this.isGenerating = false

      },
      (error) => {
        console.log("error occured")
        console.log(error)
        return error
      }
    )
  }


}



