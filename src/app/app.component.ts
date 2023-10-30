import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'cli-inmueble-app';

  constructor(private ps: AngularFirestore) {}

  ngOnInit(): void {
    this.ps
      .collection('test')
      .stateChanges()
      .subscribe((personas) => {
        console.log(personas.map((x) => x.payload.doc.data));
      });
  }
}
