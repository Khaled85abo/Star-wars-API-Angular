import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interFaces/Character';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() list: any = [];
  @Input() listSpinner: boolean = true;
  @Input() page: number = 1;
  @Output() renderChar: EventEmitter<number> = new EventEmitter();
  totalPages: number = 9;
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.list);
  }
  renderCharacter(el: Character, index: number) {
    this.renderChar.emit(index);
  }
  changePage(type: string): void {
    this.pageChange.emit(type);
  }
}
