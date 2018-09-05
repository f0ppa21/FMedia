import { trigger, state, animate, style, transition } from '@angular/animations';

export const slideInDownAnimation =
  trigger('routeAnimation', [

    transition(':enter', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('0.5s ease-in', style({ transform: 'translateX(0%)' }))
    ]),

    // Fungerar bara om man lägger till @HostBinding('style.position')  position = 'absolute'; i komponenten, men då fungerar istället
    // inte scrollPositionRestoration: 'enabled' i app-routing. Scrolla längst ner på sidan, byt vy och gör back, återställs inte...
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);
