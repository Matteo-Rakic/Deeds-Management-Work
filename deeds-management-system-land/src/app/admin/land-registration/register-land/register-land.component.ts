import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Land } from '../land-model';
import { LandService } from '../land-service';

@Component({
  selector: 'app-register-land',
  templateUrl: './register-land.component.html',
  styleUrls: ['./register-land.component.css']
})
export class RegisterLandComponent implements OnInit {
  propTypes!: string[];
  land: Land = {
    propertyID: 0,
    country: "",
    address: "",
    postalCode: "",
    state: "",
    propertyType: "",
    marketValue: 0,
    nameOfOwner: "",
    email: ""
  };
  @ViewChild('f', {static: true}) landForm!: NgForm;

  constructor(private landService: LandService) { }

  ngOnInit(): void {
    this.propTypes = this.landService.getPropTypes();
  }

  onSubmit() {
    this.land = this.landForm.value;
    this.land.propertyID = this.landService.getNumLands() + 1;
    this.landService.addNewLand(this.land);
    alert("Your new land has been successfully registered and recorded!");
    this.landForm.reset();
  }

  onReset() {
    this.landForm.reset();
  }

}
