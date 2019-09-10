import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GlucometriaDiaria } from '../interfaces/control-deavetes.interface';


@Injectable({
  providedIn: 'root'
})
export class ControlDeavetesService {

  private itemsCollection: AngularFirestoreCollection<any>;
  
  constructor( private db: AngularFirestore) { }

  cargarGlucometrias() {

    this.itemsCollection = this.db.collection<any>('glucometrias');
    return this.itemsCollection.valueChanges();

  }

  agregarGlucometria( respuesta: GlucometriaDiaria) {
    return this.db.collection('glucometrias').add(respuesta);
  }


}
