import { Component, OnInit } from '@angular/core';
import {AnimationItem} from "lottie-web";
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  options: AnimationOptions = {
    path: 'https://assets4.lottiefiles.com/packages/lf20_nuwxuelp.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
