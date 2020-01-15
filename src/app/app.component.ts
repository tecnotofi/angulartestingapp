import { Component, OnInit, ViewChild, OnChanges, Input, SimpleChanges, SimpleChange, Inject, ViewEncapsulation } from '@angular/core';
import { GridComponent, DetailRowService, GridModel, FilterSettingsModel, ToolbarItems, EditSettingsModel, IEditCell, SaveEventArgs, ForeignKeyService, SelectionService, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
// import { data, dataDos, employeeData } from './datasource';
import { arauserData, accessByRegionData, accessByZoneData, araProfileData, regionData, zoneData } from './datasourceBio';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [DetailRowService, ForeignKeyService, SelectionService],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public parentGridData: object[];
  public childGridData: object[];
  public childGridDataDos: object[];
  public araProfileSource: object[];
  public regionSource: object[];
  public zoneSource: object[];
  @ViewChild('grid', {static: true})
  public grid: GridComponent;
  public filterOptions: FilterSettingsModel;
  public toolbarOptions: ToolbarItems[];
  public editSettings: EditSettingsModel;
  public orderData: object;
  public freightRules: object;
  public testOcultar = false;
  public accessByRegionGrid: any;

  public data: object[];
  public key: string = null;

  public headerText: object = [{ text: 'Access by region' }, { text: 'Access by zone' }];

  public onRowSelected(args: RowSelectEventArgs): void {
    // let record: carType = <carType>args.data;
    this.key = args.data['USER_ID'];

    this.childGridData = accessByRegionData.filter((data: any) => data.UserId === this.key);
    this.childGridDataDos = accessByZoneData.filter((data: any) => data.UserId === this.key);
  }

  dataBound() {
    Object.assign((this.grid.filterModule as any).filterOperators, { startsWith: 'contains' });
  }

  ngOnInit(): void {
    this.parentGridData = arauserData;
    this.childGridData = [];
    this.childGridDataDos = [];
    this.araProfileSource = araProfileData;
    this.regionSource = regionData;
    this.zoneSource = zoneData;

    this.filterOptions = { type: 'Excel' };
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'];
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', showDeleteConfirmDialog: true }; // Normal - Dialog - Batch

    // this.accessByRegionGrid = {
    //   dataSource: accessByRegionData,
    //   queryString: 'UserId',
    //   allowFiltering: true,
    //   allowGrouping: true,
    //   allowSorting: true,
    //   allowPaging: true,
    //   allowResizing: true,
    //   allowReordering: true,
    //   showColumnChooser: true,
    //   filterSettings: { type: 'Excel'},
    //   toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'],
    //   editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', showDeleteConfirmDialog: true },
    //   columns: [
    //       { field: 'AccessByRegionId', headerText: 'Access By Region ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
    //       { field: 'UserId', headerText: 'User ID', width: 150 },
    //       { field: 'RegionId', headerText: 'Region ID', width: 150},
    //       { field: 'RegionId', headerText: 'Region', width: 150,  dataSource: regionData, foreignKeyValue: 'Name'},
    //       { field: 'CanViewData', headerText: 'Can View Data', width: 150, editType: 'booleanedit', displayAsCheckBox: true },
    //       { field: 'CanInsertData', headerText: 'Can Insert Data', width: 150, editType: 'booleanedit', displayAsCheckBox: true },
    //       { field: 'CanEditData', headerText: 'Can Edit Data', width: 150, editType: 'booleanedit', displayAsCheckBox: true },
    //       { field: 'CanDeleteData', headerText: 'Can Delete Data', width: 150, editType: 'booleanedit', displayAsCheckBox: true }
    //   ],
    //   load() {
    //     const ForeignUserId = 'USER_ID';
    //     this.parentDetails.parentKeyFieldValue = this.parentDetails.parentRowData[ForeignUserId];
    //   }
    // };
  }

  actionBegin(args: SaveEventArgs) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
        // cast string to integer value.
        const OrderDate = 'OrderDate';
        args.data[OrderDate] = this.orderData[OrderDate];
    }
  }
}
