import { UsersService } from './../../services/users/users.service';
import { UsersModel } from './../../models/users.model';
import { UtilService } from './../../services/util/util.service';
import { SortEvent, NgbdSortableHeader } from './../../core/directives/sortable.directive';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private location: Location,
    private route: Router,
    private utilService: UtilService
  ) { }
  users$ = new BehaviorSubject<UsersModel[]>([]);

  loading$ = new BehaviorSubject<boolean>(false);
  filterText: string;
  id: string;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  addUserLink() {
    this.route.navigate(['/home/users/add']);
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // this.service.sortColumn = column;
    // this.service.sortDirection = direction;
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe((res: any) => {
      console.log('Response');
    });
  }

  deleteUser(id: string) {
    this.id = id;
    this.utilService.showConfirm(() => { this.delete() });
  }

  getUsers() {
    this.userService.getUsers().subscribe((user: any) => {
      this.users$.next(user);
    });
  }

  ngOnInit() {
    this.getUsers();
  }
}
