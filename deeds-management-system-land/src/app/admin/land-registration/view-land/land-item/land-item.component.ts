import { Component, Input, OnInit } from '@angular/core';
import { Land } from '../../land-model';

@Component({
  selector: 'app-land-item',
  templateUrl: './land-item.component.html',
  styleUrls: ['./land-item.component.css']
})
export class LandItemComponent implements OnInit {
  @Input() index!: number;
  @Input() land!: Land;

  constructor() { }

  ngOnInit(): void {
  }

}
