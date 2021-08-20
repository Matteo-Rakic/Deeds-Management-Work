import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Land } from '../land-model';
import { LandService } from '../land-service';

@Component({
  selector: 'app-view-land',
  templateUrl: './view-land.component.html',
  styleUrls: ['./view-land.component.css']
})
export class ViewLandComponent implements OnInit, OnDestroy {
  lands!: Land[];
  sub!: Subscription
  filteredID = "";

  constructor(private landService: LandService) { }

  ngOnInit(): void {
    this.sub = this.landService.landsChanged.subscribe(
      (lands: Land[]) => {
        this.lands = lands;
      }
    );
    this.lands = this.landService.getLands();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
