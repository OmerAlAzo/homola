import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone'; 

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss'],  
  imports: [IonContent], 
})
export class RoleSelectComponent {

  constructor(private router: Router) {}

  goTo(role: string) {
    if (role === 'driver') {
      this.router.navigate(['/driver-register']);
    } else {
      this.router.navigate(['/customer-register']);
    }
  }

}
