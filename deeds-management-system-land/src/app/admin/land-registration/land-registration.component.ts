import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin-service';

@Component({
  selector: 'app-land-registration',
  templateUrl: './land-registration.component.html',
  styleUrls: ['./land-registration.component.css']
})
export class LandRegistrationComponent implements OnInit {
  loggedIn!: boolean;

  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.adminService.getValidity();
    
    if (!this.loggedIn){
      this.router.navigate(['/not-logged-in']);
    }
  }

}
