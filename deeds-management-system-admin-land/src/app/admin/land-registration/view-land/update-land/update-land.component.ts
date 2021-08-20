import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Land } from '../../land-model';
import { LandService } from '../../land-service';
import { CanComponentDeactivate } from './can-deactivate';

@Component({
  selector: 'app-update-land',
  templateUrl: './update-land.component.html',
  styleUrls: ['./update-land.component.css']
})
export class UpdateLandComponent implements OnInit, CanComponentDeactivate {
  finished = false;
  sub!: Subscription;
  propTypes!: string[];
  id!: number;
  land!: Land;
  @ViewChild('f', {static: true}) landForm!: NgForm;

  constructor(private route: ActivatedRoute,
              private landService: LandService,
              private router: Router) { }

  ngOnInit(): void {
    this.propTypes = this.landService.getPropTypes();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.land = this.landService.getLand(this.id);
      }
    );  
  }

  onSubmit() {
    this.land = this.landForm.value;
    this.land.propertyID = this.id + 1;
    this.landService.updateLand(this.id, this.land);
    alert("Your land has been updated successfully!");
    this.landForm.reset();
    this.finished = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.finished) {
      return confirm("Are you sure you want to discard the changes?"); 
    } else {
      return true;
    }
  }

}
