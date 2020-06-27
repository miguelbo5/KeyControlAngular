import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../Views/app.component.html',
  styleUrls: ['../../assets/Css/app.component.css']

})

export class AppComponent implements OnInit {

  constructor(public router: Router) { 

  }

  ngOnInit() { }

}
