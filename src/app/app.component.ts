import { Component } from '@angular/core';
import { Character } from './components/interFaces/Character';
import { GetAllCharService } from './services/get-all-char.service';
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

  constructor(private getAllCharService: GetAllCharService) {}

  ngOnInit(): void {
    this.getAllCharService.fetchCharacter(this.page).subscribe((value) => {
      this.list = value.results;
      this.listSpinner = false;
    });
  }

  // fetchCharacter() {
  //   fetch('https://swapi.dev/api/people?page=' + this.page)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.listSpinner = false;
  //       this.list = data.results;
  //     });
  // }

  renderChar(index: number) {
    this.singleChar = this.list[index];
  }
  changePage(type: string): void {
    this.listSpinner = true;
    type === 'next' ? this.page++ : this.page--;
    this.getAllCharService.fetchCharacter(this.page).subscribe((value) => {
      this.list = value.results;
      this.listSpinner = false;
    });
  }
}
