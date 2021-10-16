import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div #ThreeJSScaffolding>
    <app-renderer [divIdToRender] = "divId" (rendererInjectorEventEmit) = "injectRenderer($event)">
  </app-renderer></div>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  divId : String = 'ThreeJSScaffolding';
  @Output() rendererEvent = new EventEmitter();
  @ViewChild('ThreeJSScaffolding', {static: true}) hostRef!: ElementRef<HTMLElement>; 

  constructor() {
  }

  injectRenderer(value : any) {
    console.log(value, this.hostRef);
    this.hostRef.nativeElement.appendChild((value as THREE.WebGLRenderer).domElement);
  }



}
