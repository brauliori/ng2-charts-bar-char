import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (label, index, labels) {
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            },
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      intersect: true,
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];
          console.log(dataset.tasa)

          return new Intl.NumberFormat('es-CL').format(tooltipItem.yLabel) + " Tasa: " + dataset.tasa[tooltipItem.index];
        },
      },
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[];

  constructor() {}

  ngOnInit() {
    this.barChartData = [
      { data: [], label: '' ,tasa:[]},
      { data: [], label: '',tasa:[] },
      { data: [], label: '',tasa:[] },
      { data: [], label: '',tasa:[] },
    ];
    this.barChartLabels = ['12', '26', '36', '48'];
  }

  

  cambiar() {
    this.barChartData = [
      { data: [20000, 10000, 5000, 3000], label: '100.000' ,tasa:[1,2,3,4]},
      { data: [60000, 30000, 15000, 5000], label: '200.000',tasa:[5,6,7,8] },
      { data: [80000, 40000, 20000, 10000], label: '300.000',tasa:[9,10,11,12] },
      { data: [100000, 50000, 25000, 12500], label: '400.000',tasa:[13,14,15,16]}
    ];
    this.barChartLabels = ['12', '26', '36', '48'];
  } 
}
