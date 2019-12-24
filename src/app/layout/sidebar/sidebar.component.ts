import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() sidebarVisible: boolean = true;
  @Input() navTab: string = 'menu';
  @Input() currentActiveMenu;
  @Input() currentActiveSubMenu;
  @Output() changeNavTabEvent = new EventEmitter();
  @Output() activeInactiveMenuEvent = new EventEmitter();
  public themeClass: string = 'theme-cyan';
  public darkClass: string = '';
  private ngUnsubscribe = new Subject();
  private user: {};
  private orders = new BehaviorSubject<boolean>(false);
  private transactions = new BehaviorSubject<boolean>(false);

  constructor(
    private themeService: ThemeService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private authService: AuthService) {
    this.themeService.themeClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(themeClass => {
        this.themeClass = themeClass;
      });
    this.themeService.darkClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(darkClass => {
        this.darkClass = darkClass;
      });
  }

  ngOnInit() {
    this.user = this.localStorageService.get('AUTH_DATA', true).user;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changeNavTab(tab: string) {
    this.navTab = tab;
  }

  activeInactiveMenu(menuItem: string) {
    this.activeInactiveMenuEvent.emit({ item: menuItem });
  }

  changeTheme(theme: string) {
    this.themeService.themeChange(theme);
  }

  changeDarkMode(darkClass: string) {
    this.themeService.changeDarkMode(darkClass);
  }

  logOut() {
    this.authService.signout().subscribe((res: any) => {
      this.localStorageService.clear('AUTH_DATA');
      this.router.navigate(['/auth/login']);
    });
  }

  showSubMenu(event: MouseEvent) {
    const elementId: string = (event.target as Element).id;
    if (elementId === 'orders') {
      this.orders.next(true);
      this.transactions.next(false);
    } else {
      this.transactions.next(true);
      this.orders.next(false);
    }
  }

}
