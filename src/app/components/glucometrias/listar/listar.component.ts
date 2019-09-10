import { Component, OnInit } from '@angular/core';
import { ControlDeavetesService } from 'src/app/services/control-deavetes.service';
import { GlucometriaDiaria } from 'src/app/interfaces/control-deavetes.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public glucometria;
  constructor( private control: ControlDeavetesService) { }

  ngOnInit() {
    this.control.cargarGlucometrias().subscribe( (gluco) => {
      this.glucometria = gluco;
    })
  }

}
