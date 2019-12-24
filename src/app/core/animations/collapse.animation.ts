import { trigger, animate, transition, style, state } from '@angular/animations';

export const collapseAnimation = trigger('collapseAnimation', [
  state(
    'true',
    style({
      overflow: 'visible',
      height: '*'
    })
  ),
  state(
    'false',
    style({
      opacity: '0',
      overflow: 'hidden',
      height: '0px'
    })
  ),
  transition('1 => 0', animate('400ms ease-in-out')),
  transition('0 => 1', animate('400ms ease-in-out'))
]);
