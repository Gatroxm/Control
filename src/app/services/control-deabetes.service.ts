import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GlucometriaDiaria } from '../interfaces/control-deabetes.interface';


@Injectable({
  providedIn: 'root'
})
export class ControlDeabetesService {

  private itemsCollection: AngularFirestoreCollection<any>;

  constructor( private db: AngularFirestore) { }

  cargarGlucometrias() {
    const uid = localStorage.getItem('uid');
    this.itemsCollection = this.db.collection<any>('glucometrias', ref => ref.where('usuario', '==', uid).orderBy('fecha', 'asc'));
    return this.itemsCollection.valueChanges();
  }
  cargarGlucometriasGrafica() {
    const uid = localStorage.getItem('uid');
    // tslint:disable-next-line:max-line-length
    this.itemsCollection = this.db.collection<any>('glucometrias', ref => ref.where('usuario', '==', uid).orderBy('fecha', 'desc').limit(10));
    return this.itemsCollection.valueChanges();
  }

  agregarGlucometria( respuesta: GlucometriaDiaria): void {
    this.db.collection('glucometrias').add(respuesta);
  }

}
