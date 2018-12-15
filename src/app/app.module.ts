import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AmexioChartD3Module} from 'amexio-chart-d3';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { GridlayoutComponent } from './gridlayout/gridlayout.component';
import { GridlayoutdemoComponent } from './gridlayoutdemo/gridlayoutdemo.component';
import { TemplateformdemoComponent } from './templateformdemo/templateformdemo.component';
import { D3chartdemoComponent } from './d3chartdemo/d3chartdemo.component';
import { TimelinedemoComponent } from './timelinedemo/timelinedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    GridlayoutComponent,
    GridlayoutdemoComponent,
    TemplateformdemoComponent,
    D3chartdemoComponent,
    TimelinedemoComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    AmexioChartD3Module,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
