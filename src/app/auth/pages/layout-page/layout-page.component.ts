import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Log In', icon: 'label', url:'./login' },
    { label: 'Sign Up', icon: 'label', url:'./sign' },
  ]

}
