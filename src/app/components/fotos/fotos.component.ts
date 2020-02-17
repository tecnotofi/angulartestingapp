import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {nombre: string; url: string;}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  private itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private fireStore: AngularFirestore) {
    this.itemCollection = fireStore.collection<Item>('img');
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit() {
  }

}
