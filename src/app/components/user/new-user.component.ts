import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe( params =>  {
      // console.log('Ruta hija new');
      // console.log(params);
    });
  }

  ngOnInit() {
  }

}
