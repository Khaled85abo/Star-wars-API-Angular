import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interFaces/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Input() singleChar: Character = {};
  constructor() {}

  ngOnInit(): void {}
}
