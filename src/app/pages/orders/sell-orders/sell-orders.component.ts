
import { SellOrdersService } from '../../../services/sell-orders/sell-orders.service';
import { SellOrderModel } from '../../../models/sell-orders.model';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sell-orders',
  templateUrl: './sell-orders.component.html',
  styleUrls: ['./sell-orders.component.css']
})
export class SellOrdersComponent implements OnInit {

  sellOrder$ = new BehaviorSubject<any>(this.sellOrderService.getSellOrders);
  constructor(private sellOrderService: SellOrdersService) { }

  getSellOrders() {
    this.sellOrderService.getSellOrders().subscribe((sellOrder: any) => {
      this.sellOrder$.next(sellOrder);
    });
  }

  ngOnInit() {
    this.getSellOrders();
  }

}
