import { Component, OnInit } from '@angular/core';

export const AboutDialogDefaultConfig = {
  width: '280px'
};

@Component({
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.css']
})
export class AboutDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
