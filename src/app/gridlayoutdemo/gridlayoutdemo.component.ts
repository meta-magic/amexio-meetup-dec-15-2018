import { Component, OnInit } from '@angular/core';
import {AmexioGridLayoutService, GridConfig, GridConstants} from 'amexio-ng-extensions';

@Component({
  selector: 'app-gridlayoutdemo',
  templateUrl: './gridlayoutdemo.component.html',
  styleUrls: ['./gridlayoutdemo.component.css']
})
export class GridlayoutdemoComponent implements OnInit {

  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;

  constructor(private _gridService: AmexioGridLayoutService) { 
    this.createLayout();

    this._gridService.createLayout(this.gridDesktop);
    this._gridService.createLayout(this.gridTablet);
    this._gridService.createLayout(this.gridMobile);

  }

  ngOnInit() {
  }
  createLayout() {
    this.gridDesktop = new GridConfig('Home', GridConstants.Desktop)
    .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridtitle", "gridmain", "gridmain", "gridright1"])
      .addlayout(["gridmenu", "gridmain", "gridmain", "gridright2"])
      .addlayout(["gridmenu", "gridmain", "gridmain", "gridright3"]);

      this.gridTablet = new GridConfig('Home', GridConstants.Tablet)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
        .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
        .addlayout(["gridtitle", "gridtitle", "gridright1", "gridright1"])
        .addlayout(["gridmenu", "gridmenu", "gridright2", "gridright2"])
        .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);


        this.gridMobile = new GridConfig('Home', GridConstants.Mobile)
        .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
          .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
          .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu"])
          .addlayout(["gridtitle", "gridtitle", "gridtitle", "gridtitle"])
          .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
          .addlayout(["gridright2", "gridright2", "gridright2", "gridright2"])
          .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"])

  }

}
