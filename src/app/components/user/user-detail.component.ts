import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `
    <p>
      user-detail works!
    </p>
  `,
  styles: []
})
export class UserDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe( params =>  {
      // console.log('Ruta hija detail');
      // console.log(params);
    });
  }

  ngOnInit() {
  }

}
