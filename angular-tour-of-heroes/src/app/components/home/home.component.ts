import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: string;
  constructor() {
    this.token = "";
  }

  ngOnInit(): void {
  }
  submitToken(): void {
    window.localStorage.setItem('token',this.token);
  }

}
