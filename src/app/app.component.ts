import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'resume';

  constructor() {
    this.preventback();
  }
  ngOnInit() {
    localStorage.setItem('userName', 'Devi');
    localStorage.setItem('userPassword', '123456789U');
  }
  preventback() {
    window.history.pushState(null, document.title, window.location.href);

    window.onpopstate = function () {
      window.history.pushState(null, document.title, window.location.href);
    };
  }
}
