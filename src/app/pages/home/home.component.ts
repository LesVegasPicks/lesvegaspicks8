import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js/src/typed';

@Component({
  selector: 'jhs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit() {
    let typed = new Typed(".banner_home_typed", {
      strings: [
        "Welcome to LesVegas Picks, sports betting consultants"
        
      ],
      typeSpeed: 50, // 100
      backSpeed: 50, // 100
      backDelay: 1000,
      showCursor: true,
      cursorChar: "|",
      loop: false
    });
  }

}
