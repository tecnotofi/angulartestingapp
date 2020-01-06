import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridModule, PageService, SortService, FilterService, GroupService, SearchService, ToolbarService, ReorderService, ResizeService, ColumnChooserService, EditService } from '@syncfusion/ej2-angular-grids';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    TabModule
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    SearchService,
    ToolbarService,
    ReorderService,
    ResizeService,
    ColumnChooserService,
    EditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
