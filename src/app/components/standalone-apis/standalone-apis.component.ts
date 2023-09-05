import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standalone-apis',
  templateUrl: './standalone-apis.component.html',
  styleUrls: ['./standalone-apis.component.css']
})
export class StandaloneAPIsComponent {
  showTab: number = 1;
  constructor(private router :Router){
    
  }

  tab1() {
    // this.showTab = 1;
    this.router.navigate(['/tab1'])
  }
  tab2() {
    // this.showTab = 2;
    this.router.navigate(['/tab2'])
  }
  tab3() {
    // this.showTab = 3;
    this.router.navigate(['/tab3'])
  }
  tab4() {
    // this.showTab = 4;
    this.router.navigate(['/tab4'])
  }
}
