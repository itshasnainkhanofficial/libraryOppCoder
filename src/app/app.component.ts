import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(){

    
      // window.addEventListener('online', () => console.log('came online'));
      // window.addEventListener('offline', () => console.log('came offline'));
  }
  title : string = 'libraryOppCoder';
}
