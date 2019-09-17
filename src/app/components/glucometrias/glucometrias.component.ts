import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ControlDeabetesService } from 'src/app/services/control-deabetes.service';

@Component({
  selector: 'app-glucometrias',
  templateUrl: './glucometrias.component.html',
  styleUrls: ['./glucometrias.component.css']
})
export class GlucometriasComponent implements OnInit {
  public carga: boolean = true;
  constructor(private control: ControlDeabetesService) { }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[];
  public fechas = new Array();
  public datos = new Array();
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];

  

  ngOnInit() {
    this.control.cargarGlucometriasGrafica().subscribe( data => {
        data.forEach((element) => {
          this.fechas.push(element['fecha']);
          this.datos.push(element['valor']);
        });
        this.barChartData = [
          {
            data: this.datos,
            label: 'Ultimas 10 glucometrias'
          }
        ];
        this.barChartLabels =  this.fechas;
        this.carga = false;
    });
  }

}
