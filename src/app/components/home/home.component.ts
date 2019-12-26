import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <p>Hola mundo desde app.component</p>
    <app-clases></app-clases>
    <hr>
    <p [appHighlighted]="'orange'">
        Hello world
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
