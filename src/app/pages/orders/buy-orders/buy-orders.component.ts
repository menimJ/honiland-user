
import { BuyOrdersService } from '../../../services/buy-orders/buy-orders.service';
import { BuyOrderModel } from '../../../models/buy-orders.model';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-buy-orders',
  templateUrl: './buy-orders.component.html',
  styleUrls: ['./buy-orders.component.css']
})
export class BuyOrdersComponent implements OnInit {

  buyOrder$ = new BehaviorSubject<any>(this.buyOrderService.getBuyOrders);

  constructor(private buyOrderService: BuyOrdersService) { }

  getBuyOrders() {
    this.buyOrderService.getBuyOrders().subscribe((buyorder: any) => {
      // console.log(res);
      this.buyOrder$.next(buyorder);
    });
  }


  ngOnInit() {
    this.getBuyOrders();
  }
}


