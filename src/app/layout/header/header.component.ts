import { UtilService } from '../../services/util/util.service';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {
  // Properties
  public sidebarOpened = false;
  balance$ = new BehaviorSubject<string>('');
  name$ = new BehaviorSubject<string>('');
  nameabbr$: any;
  loaderStatus$ = new BehaviorSubject<boolean>(false);
  @Input() showNotifMenu = false;
  @Input() showToggleMenu = false;
  @Input() darkClass = '';
  @Output() toggleSettingDropMenuEvent = new EventEmitter();
  @Output() toggleNotificationDropMenuEvent = new EventEmitter();

  constructor(
    public config: NgbDropdownConfig,
    private themeService: ThemeService,
    private localStorage: LocalStorageService,
    private router: Router,
    private utilService: UtilService
  ) {
    config.placement = 'bottom-right';
    this.loaderStatus$ = this.utilService.loaderStatus;
  }

  ngOnInit() {}

  toggleSettingDropMenu() {
    this.toggleSettingDropMenuEvent.emit();
  }

  toggleNotificationDropMenu() {
    this.toggleNotificationDropMenuEvent.emit();
  }

  toggleSideMenu() {
    this.themeService.showHideMenu();
  }

  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    } else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }

  signOut() {
    this.utilService.showConfirm(() => {
      this.localStorage.clear();
      this.router.navigate(['/auth/login']);
    });
  }
}
