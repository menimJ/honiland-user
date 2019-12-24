import { StatisticsModel } from './../../models/statistics.model';
import { BehaviorSubject } from 'rxjs';
import { StatisticsService } from './../../services/statistics/statistics.service';
import { Component, OnInit } from '@angular/core';

import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faDolly } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faShippingFast = faShippingFast;
  faTruckLoading = faTruckLoading;
  faDolly = faDolly;
  faHandHoldingUsd = faHandHoldingUsd;
  faMedal = faMedal;

  statistics$ = new BehaviorSubject<any>(this.statisticsService.getStatistics);

  constructor(private statisticsService: StatisticsService) { }

  getStatistics() {
    this.statisticsService.getStatistics().subscribe((stats: any) => {
      this.statistics$.next(stats[0]);
    });
  }


  ngOnInit() {
    this.getStatistics();
  }

}
