import { Component } from '@angular/core';
import { Character } from './components/interFaces/Character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: any = [];
  listSpinner: boolean = true;
  page: number = 1;
  title = 'starwars';
  singleChar: Character | null = null;
  ngOnInit(): void {
    this.fetchCharacter();
  }

  fetchCharacter() {
    fetch('https://swapi.dev/api/people?page=' + this.page)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.listSpinner = false;
        this.list = data.results;
      });
  }

  renderChar(index: number) {
    this.singleChar = this.list[index];
  }
  changePage(type: string): void {
    type === 'next' ? this.page++ : this.page--;
    this.fetchCharacter();
  }
}
