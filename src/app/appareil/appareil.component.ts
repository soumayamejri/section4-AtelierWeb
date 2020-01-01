import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../appareil.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  isAuth;

  constructor(private appareilServce: AppareilService, private authService: AuthService) { }
  ngOnInit(){
    this.isAuth = this.authService.isAuth;  
  }
  

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
  onSwitch(){
    if(this.appareilStatus==='allumé') {
      this.appareilServce.switchOffOne(this.index);
    }
    else if (this.appareilStatus==='éteint') {
      this.appareilServce.switchOnOne(this.index);
    }
  }

}
