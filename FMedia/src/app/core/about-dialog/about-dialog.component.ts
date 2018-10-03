import { Component, OnInit } from '@angular/core';

export let AboutDialogDefaultConfig = {
  width: '280px',
  scrollStrategy: null // Måste sättas av anropande component
};

@Component({
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.css']
})
export class AboutDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
