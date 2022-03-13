import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-info-btns',
  templateUrl: './extra-info-btns.component.html',
  styleUrls: ['./extra-info-btns.component.css'],
})
export class ExtraInfoBtnsComponent implements OnInit {
  extraInfoType: string = 'planet';
  constructor() {}

  ngOnInit(): void {}

  handleExtraInfoBtn(type: string): void {
    console.log(type);
  }
}
