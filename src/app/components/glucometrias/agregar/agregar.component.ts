import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ControlDeabetesService } from 'src/app/services/control-deabetes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public forma: FormGroup;
  public message: string;

  constructor( private control: ControlDeabetesService, private router: Router) { }

  ngOnInit() {
    this.forma = new FormGroup({
      valor: new FormControl(null, []),
      fecha: new FormControl(null, []),
      horario: new FormControl(),
      usuario: new FormControl (localStorage.getItem('uid'))
    });
  }

  guardarCambios() {
    this.control.agregarGlucometria(this.forma.value);
    this.router.navigate(['glucometrias/listar']);
  }

}
