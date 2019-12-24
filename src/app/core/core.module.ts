import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MustMatchDirective } from './directives/must-match.directive';
import { NgbdSortableHeader } from './directives/sortable.directive';
import { NumberDirective } from './directives/numberonly.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MustMatchDirective, NgbdSortableHeader, NumberDirective],
  exports: [MustMatchDirective, NumberDirective, NgbdSortableHeader]
})
export class CoreModule {}
