import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './admin-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  validAdmin!: boolean;
  @ViewChild('f', {static: true}) adminForm!: NgForm;

  constructor(private adminService: AdminService, 
              private router: Router) { 
  }

  ngOnInit(): void {
    this.validAdmin = this.adminService.getValidity();
  }

  onSubmit() {
    this.validAdmin = this.adminService.validateAdmin(this.adminForm.value.adminUsername, this.adminForm.value.adminPassword);

    if (this.validAdmin) {
      alert("You have logged in as an administrator.");
      this.router.navigate(['land-hub']);
    } else {
      alert("Invalid log-in credentials!")
    }
    
    this.adminForm.reset();
  }

}
