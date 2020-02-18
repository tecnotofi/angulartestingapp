import { Component, OnDestroy } from '@angular/core';
import { gridLayout } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  results: any[] = [
    {
      "name": "Juego 1",
      "value": 13
    },
    {
      "name": "Juego 2",
      "value": 22
    },
    {
      "name": "Juego 3",
      "value": 17
    },
    {
      "name": "Juego 4",
      "value": 17
    }
  ];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() {
    this.intervalo = setInterval(() => {
      console.log('tick');
      const newResults = [...this.results];

      // for (let i in newResults) {
      //   newResults[i].value = Math.round(Math.random() * 500);
      // }

      newResults.forEach(result => result.value = Math.round(Math.random() * 500));

      this.results = [...newResults];

    }, 500);
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}
