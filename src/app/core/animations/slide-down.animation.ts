import { trigger, style, state, transition, animate, group } from '@angular/animations';
export const SlideDownAnimation = [
        trigger('slideInOut', [
            state('in', style({height: '*', opacity: 0})),
            transition(':leave', [
                style({height: '*', opacity: 1}),

                group([
                    animate(300, style({height: 0})),
                    animate('200ms ease-in-out', style({'opacity': '0'}))
                ])

            ]),
            transition(':enter', [
                style({height: '0', opacity: 0}),

                group([
                    animate(300, style({height: '*'})),
                    animate('800ms ease-in-out', style({'opacity': '1'}))
                ])

            ])
        ])
    ]

