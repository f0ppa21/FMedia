import { trigger, state, animate, style, transition } from '@angular/animations';
/*
Config i den component.ts som ska animeras vid routing:
import { HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../shared/router.animations';
Direkt under "export class":
@HostBinding('@routeAnimation') routeAnimation = true;
@HostBinding('style.display')   display = 'block';
// Denna fixar leave-animeringen (fade out) men då fungerar
// inte scrollPositionRestoration: 'enabled' i app-routing.module.ts
// Scrolla längst ner på sidan, byt vy och gör back, återställs inte... Kan dock fixas i nyare ng-versioner!
@HostBinding('style.position')  position = 'absolute';
*/
export const slideInDownAnimation =

  trigger('routeAnimation', [

    transition(':enter', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('0.5s ease-in', style({ transform: 'translateX(0%)' }))
    ]),

    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])

  ]);
