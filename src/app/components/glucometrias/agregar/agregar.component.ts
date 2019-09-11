import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ControlDeabetesService } from 'src/app/services/control-deabetes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public forma: FormGroup;
  public save: boolean = false;
  public message: string;

  constructor( private control: ControlDeabetesService) { }

  ngOnInit() {
    this.forma = new FormGroup({
      'valor': new FormControl(null, []),
      'fecha': new FormControl(null, []),
      'horario': new FormControl()
    });
  }

  guardarCambios() {
    this.message = this.control.agregarGlucometria(this.forma.value);
    this.save = true;
  }

  cerrarMessage() {
    this.save = false;
  }

}
