import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      // Define animation transitions here using 'transition', 'style', 'animate', etc.
      transition(':enter', [
        style({ opacity: 0, marginTop:'-100px' }),
        animate('500ms', style({ opacity: 1, marginTop: 0 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class AppComponent {
  title = signal('Signals')

  prepareRouterState(router: RouterOutlet) {
    return router.activatedRouteData['animation'] || 'initial';
  }
}
