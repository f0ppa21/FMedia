import { Component, OnInit } from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';

export let AboutDialogDefaultConfig = {
  width: '280px',
  scrollStrategy: null
};

@Component({
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.css']
})
export class AboutDialogComponent implements OnInit {

  constructor(overlay: Overlay) { AboutDialogDefaultConfig.scrollStrategy = overlay.scrollStrategies.noop(); }

  ngOnInit() { }
}
