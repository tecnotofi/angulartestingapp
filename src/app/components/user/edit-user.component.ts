import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  template: `
    <p>
      edit-user works!
    </p>
  `,
  styles: []
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe( params =>  {
      // console.log('Ruta hija edit');
      // console.log(params);
    });
  }

  ngOnInit() {
  }

}
