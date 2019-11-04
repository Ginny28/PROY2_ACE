import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../_services/app-service.service';
import {ChartModule} from 'primeng/chart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  graph1: any;
  graph2: any;
  graph3: any;
  graph4: any;
  graph5: any;
  graph6: any;


  distancia = [];
  velocidad = [];
  objetos = [];
  tiempoD = [];
  tiempoT = [];

  values: Observable<any>;

  constructor( private srv: AppServiceService) { }

  ngOnInit() {
    this.getData();
    }

  settingData() {
    this.graph1 = {
      labels: this.distancia,
      datasets: [
        {
            label: 'tiempo ',
            data: this.tiempoD,
            fill: false,
            borderColor: '#565656'
        },
        {
          label: 'tiempo total',
          data: this.tiempoT,
          fill: false,
          borderColor: '#3890E5'
        }
    ]
    };
    this.graph2 = {
      labels: this.tiempoT,
      datasets: [
        {
          label: 'Distancia',
          data: this.distancia,
          fill: false,
          borderColor: '#3890E5'
        }
    ]
    };

    this.graph3 = {
      labels: this.velocidad,
      datasets: [
        {
            label: 'tiempo ',
            data: this.tiempoD,
            fill: false,
            borderColor: '#565656'
        },
        {
          label: 'tiempo total',
          data: this.tiempoT,
          fill: false,
          borderColor: '#3890E5'
        }
    ]
    };
    this.graph4 = {
      labels: this.objetos,
      datasets: [
        {
            label: 'tiempo ',
            data: this.tiempoD,
            fill: false,
            borderColor: '#565656'
        },
        {
          label: 'tiempo total',
          data: this.tiempoT,
          fill: false,
          borderColor: '#3890E5'
        }
    ]
    };

  }

  getData() {
    this.tiempoD = []; this.tiempoT = []; this.distancia = []; this.objetos = [];
    this.velocidad = [];
    this.srv.other()
      .subscribe(
        (res: any) => {
         res.forEach(element => {
           this.distancia.push(element.distancia);
           this.tiempoD.push(element.tiempoD);
           this.tiempoT.push(element.tiempoT);
           this.objetos.push(element.objetos);
           this.velocidad.push(element.velocidad);
                  });
                  }
      );
    this.settingData();
    setTimeout(() => { this.getData(); }, 10000);
  }

}

