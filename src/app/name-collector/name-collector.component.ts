import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-collector',
  templateUrl: './name-collector.component.html',
  styleUrls: ['./name-collector.component.css'],
})
export class NameCollectorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  fName = '';
  buttonStatus() {
    if (this.fName.trim().length > 0) return false;
    else return true;
  }
  clearName() {
    this.fName = '';
  }
}
