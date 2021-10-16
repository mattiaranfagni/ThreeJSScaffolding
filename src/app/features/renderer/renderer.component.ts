import { Component, EventEmitter, Input, OnInit, Output, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-renderer',
  template: `<app-scene-camera [renderer] = "webGLRenderer"></app-scene-camera>`,
})
export class RendererComponent implements OnInit {
  @Input() divIdToRender : any; //si assegna al valore dell'appComponent
  webGLRenderer: THREE.WebGLRenderer;
  @Output() rendererInjectorEventEmit = new EventEmitter(); 

  constructor() {
    this.webGLRenderer = new THREE.WebGLRenderer({ antialias: true } );
    this.webGLRenderer.setPixelRatio( window.devicePixelRatio );
    //per fullscreen
    this.webGLRenderer.setSize( window.innerWidth, window.innerHeight );
    //per 500x500
    //this.webGLRenderer.setSize( 500, 500 ); 
    this.webGLRenderer.shadowMap.enabled = true;
  }

  ngOnInit(): void {
    this.rendererInjectorEventEmit.emit(this.webGLRenderer);
  }

  @HostListener('window:resize') //per fare in modo che cambi grandezza
  onWindowResize() {
    console.log("renderer: changed size");
    this.webGLRenderer.setSize( window.innerWidth, window.innerHeight );
  }

}
