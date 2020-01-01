import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  appareils: any[];
  isAuth;
  lastUpdate = new Promise((resolve, reject) =>{
    const date = new Date();
    setTimeout(
    () => {
      resolve(date);
    }, 2000
    )
  } )
  constructor(private appreilService: AppareilService, private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuth;
    this.appareils = this.appreilService.appareils;
  }
  onAllumer() {
    this.appreilService.switchOnAll();
  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appreilService.switchOffAll();
    } else {
      return null;
    }

}
}
