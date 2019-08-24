import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gauges';

  public canvasWidth = 200;
  public needleValue = 44;
  public centralLabel = 'test';
  public name = 'Gauge chart';
  public bottomLabel = '65';
  public options = {
    hasNeedle: false,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [30],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
  };

}
