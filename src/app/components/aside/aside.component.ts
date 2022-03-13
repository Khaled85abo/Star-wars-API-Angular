import { Component, OnInit, Input } from '@angular/core';
import { Character, Planet } from '../interFaces/Character';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  @Input() singleChar!: Character;
  planet: Planet | null = null;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.singleChar.homeworld) {
      fetch(this.singleChar.homeworld)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.planet = data;
        });
    }
  }
  //ngAfterContentInit();
  // getPlanet(singleChar: Character) {
  //   fetch(singleChar.homeworld)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.planet = data;
  //     });
  // }
}
