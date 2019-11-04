import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../_services/app-service.service';
import {ChartModule} from 'primeng/chart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  graph1: any;
  graph2: any;


  distancia = [];
  tiempoD = [];
  tiempoT = [];

  values: Observable<any>;

  constructor( private srv: AppServiceService) { }

  ngOnInit() {
    this.getData();
    }

  settingData() {
    this.graph1 = {
      labels: this.tiempoD,
      datasets: [
        {
            label: 'Distancia',
            data: this.distancia,
            fill: false,
            borderColor: '#565656'
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
  }

  getData() {
    this.tiempoD = []; this.tiempoT = []; this.distancia = [];
    this.srv.other()
      .subscribe(
        (res: any) => {
         res.forEach(element => {
           this.distancia.push(element.distancia);
           this.tiempoD.push(element.tiempoD);
           this.tiempoT.push(element.tiempoT);
                  });
                  }
      );
    this.settingData();
    setTimeout(() => { this.getData(); }, 10000);
  }

}
