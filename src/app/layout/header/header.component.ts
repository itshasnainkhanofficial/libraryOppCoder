import { Component, OnInit } from '@angular/core';
import { faHome , faCartPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faHome = faHome;
  faCart = faCartPlus;
  
  constructor() { }

  ngOnInit(): void {
  }

}
