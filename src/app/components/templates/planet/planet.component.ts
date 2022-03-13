import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../interFaces/Character';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {
  @Input() planet: Planet = {};
  constructor() {}

  ngOnInit(): void {}
}
