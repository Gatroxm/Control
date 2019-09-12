import { Component, OnInit } from '@angular/core';
import { ControlDeabetesService } from 'src/app/services/control-deabetes.service';
import { GlucometriaDiaria } from 'src/app/interfaces/control-deabetes.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public glucometria;
  public paginate: number = 1;
  public carga: boolean = true;

  constructor( private control: ControlDeabetesService) { }

  ngOnInit() {
    this.control.cargarGlucometrias().subscribe( (gluco) => {
      this.glucometria = gluco;
      this.carga = false;
    });
  }

}
