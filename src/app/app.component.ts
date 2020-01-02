import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, DetailRowService, GridModel, FilterSettingsModel, ToolbarItems, EditSettingsModel, IEditCell, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { data, dataDos, employeeData } from './datasource';
import { arauserData } from './datasourceBio';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [DetailRowService]
})
export class AppComponent implements OnInit {

    public pData: object[];
    @ViewChild('grid', {static: true})
    public grid: GridComponent;
    public filterOptions: FilterSettingsModel;
    public toolbarOptions: ToolbarItems[];
    public editSettings: EditSettingsModel;
    public orderData: object;
    public freightRules: object;
    public testOcultar = false;
    // public childGrid: GridModel = {
    //   dataSource: data,
    //   queryString: 'EmployeeID',
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
    //       { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
    //       { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    //       { field: 'ShipCity', headerText: 'Ship City', width: 150, editType: 'dropdownedit' },
    //       { field: 'ShipName', headerText: 'Ship Name', width: 150, editType: 'dropdownedit' }
    //   ]
  // };

    dataBound() {
      Object.assign((this.grid.filterModule as any).filterOperators, { startsWith: 'contains' });
    }

    ngOnInit(): void {
      this.pData = arauserData;
      this.filterOptions = {
        type: 'Excel'
      };
      this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'];
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', showDeleteConfirmDialog: true }; //Normal - Dialog - Batch
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
