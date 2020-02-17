import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-windowobj',
  templateUrl: './windowobj.component.html',
  styleUrls: ['./windowobj.component.css']
})
export class WindowobjComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnClick() {
    console.log(window.location.href)
    window.location.href = "https://www.google.com"
  }

}
