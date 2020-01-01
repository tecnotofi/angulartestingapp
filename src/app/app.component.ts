import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, FilterSettingsModel, ToolbarItems, EditSettingsModel, IEditCell, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid', {static: true})
    public grid: GridComponent;
    public filterOptions: FilterSettingsModel;
    public toolbarOptions: ToolbarItems[];
    public editSettings: EditSettingsModel;
    public orderData: object;
    public freightRules: object;
    public testOcultar = false;

    dataBound() {
      Object.assign((this.grid.filterModule as any).filterOperators, { startsWith: 'contains' });
    }

    ngOnInit(): void {
      this.data = data;
      this.filterOptions = {
        type: 'Excel'
      };
      this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'];
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', showDeleteConfirmDialog: true }; //Normal - Dialog
      // this.freightRules = { minValue: };
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
