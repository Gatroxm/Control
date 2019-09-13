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
    this.itemsCollection = this.db.collection<any>('glucometrias', ref => ref.orderBy('fecha','desc'));
    return this.itemsCollection.valueChanges();
  }

  agregarGlucometria( respuesta: GlucometriaDiaria) : string{
    this.db.collection('glucometrias').add(respuesta);
    return `Se agrego el resultado ${respuesta['valor']} correcta mente`;
  }

}
