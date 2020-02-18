import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styles: []
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  irAlPrincipio() {
    this.viewport.scrollToIndex(0);
  }

  irAlMedio() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

  irAlFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }
}
