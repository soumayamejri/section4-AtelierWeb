import { Component } from '@angular/core';
import { AppareilService } from './appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isAuth = false;


  constructor(private appreilService: AppareilService) {
    
  }

  ngOnInit() {
  }

}

