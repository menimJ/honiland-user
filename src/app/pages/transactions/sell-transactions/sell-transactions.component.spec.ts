import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTransactionsComponent } from './sell-transactions.component';

describe('SellTransactionsComponent', () => {
  let component: SellTransactionsComponent;
  let fixture: ComponentFixture<SellTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
