import { ThemeService } from '../../services/theme.service';
import { SidebarService } from '../../services/sidebar.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements AfterViewInit, OnInit, OnDestroy {
  public title = 'lucid';
  public isStopLoading = false;
  public showNotifMenu = false;
  public showToggleMenu = false;
  public navTab = 'menu';
  public currentActiveMenu = 'light';
  public currentActiveSubMenu;
  public themeClass = 'theme-cyan';
  public smallScreenMenu = '';
  public darkClass = '';
  private ngUnsubscribe = new Subject();

  constructor(
    public sidebarService: SidebarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private titleService: Title
  ) {
    this.activatedRoute.url
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(url => {
        this.isStopLoading = false;
        this.getActiveRoutes();
      });

    this.themeService.themeClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(themeClass => {
        this.themeClass = themeClass;
      });

    this.themeService.smallScreenMenuShow
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(showMenuClass => {
        this.smallScreenMenu = showMenuClass;
      });

    this.themeService.darkClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(darkClass => {
        this.darkClass = darkClass;
      });
  }

  ngOnInit() {
    // const that = this;
    // this.router.events
    //   .filter(event => event instanceof NavigationEnd)
    //   .map(() => this.activatedRoute)
    //   .map(route => {
    //     that.themeService.hideMenu();
    //     while (route.firstChild) {
    //       route = route.firstChild;
    //     }
    //     return route;
    //   })
    //   .filter(route => route.outlet === 'primary')
    //   .mergeMap(route => route.data)
    //   .pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe(event => this.titleService.setTitle(event['title']));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleNotificationDropMenu() {
    this.showNotifMenu = !this.showNotifMenu;
  }

  toggleSettingDropMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  ngAfterViewInit() {
    const that = this;
    setTimeout(function() {
      that.isStopLoading = true;
    }, 1000);
  }

  getActiveRoutes() {
    const segments: Array<string> = this.router.url.split('/');
    this.currentActiveMenu = segments[2];
    this.currentActiveSubMenu = segments[3];
  }

  activeInactiveMenu($event) {
    if ($event.item && $event.item === this.currentActiveMenu) {
      this.currentActiveMenu = '';
    } else {
      this.currentActiveMenu = $event.item;
    }
  }
}
