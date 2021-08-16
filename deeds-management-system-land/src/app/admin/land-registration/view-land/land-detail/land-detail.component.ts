import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Land } from '../../land-model';
import { LandService } from '../../land-service';

@Component({
  selector: 'app-land-detail',
  templateUrl: './land-detail.component.html',
  styleUrls: ['./land-detail.component.css']
})
export class LandDetailComponent implements OnInit {
  id!: number;
  land!: Land;

  constructor(private route: ActivatedRoute, 
              private landService: LandService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.land = this.landService.getLand(this.id);
      }
    );
  }

  onUpdate() {
    this.router.navigate(['../', this.id, 'edit-land'], {relativeTo: this.route});
  }

}
