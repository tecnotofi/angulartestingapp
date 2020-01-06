import { Component, OnInit, ViewChild, OnChanges, Input, SimpleChanges, SimpleChange, Inject } from '@angular/core';
import { GridComponent, DetailRowService, GridModel, FilterSettingsModel, ToolbarItems, EditSettingsModel, IEditCell, SaveEventArgs, ForeignKeyService, SelectionService, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
// import { data, dataDos, employeeData } from './datasource';
import { arauserData, accessByRegionData, accessByZoneData, araProfileData, regionData, zoneData } from './datasourceBio';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [DetailRowService, ForeignKeyService, SelectionService]
})
export class AppComponent implements OnInit {

  public parentGridData: object[];
  public childGridData: object[];
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

  public data: Object[];
  public key: string = null;
  
  public onRowSelected(args: RowSelectEventArgs): void {
    // let record: carType = <carType>args.data;
    this.key = args.data['USER_ID'];
    
    this.childGridData = accessByRegionData.filter((data: any) => data.UserId === this.key)
  }

//   public headerText: Object = [{ 'text': 'Acce4ss by region' }, { 'text': 'Acce4ss by zone' }];

    //    public content0: string = 'Twitter is an online social networking service that enables users to send and read short 140-character ' +
    //         'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
    //         'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
    //         'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
    //         'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
    //         'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
    //         'search queries per day.';

    // public content1: string = 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
    //         'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
    //         'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s ' +
    //         'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
    //         'University. It gradually added support for students at various other universities and later to high-school students.';

    // public content2: string = 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates ' +
    //         'under a subscription business model. It uses the Internet to send text messages, images, video, user location and ' +
    //         'audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user ' +
    //         'base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in ' +
    //         'Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.';

  dataBound() {
    Object.assign((this.grid.filterModule as any).filterOperators, { startsWith: 'contains' });
  }

  ngOnInit(): void {
    this.parentGridData = arauserData;
    this.childGridData = [];
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
