import { Component, Input, OnInit, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-scene-camera',
  template: ``,
})
export class SceneCameraComponent implements OnInit {
  @Input() renderer : any;
  camera : any;
  scene : THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xf0f0f0 );

    this.camera = new THREE.Camera();
    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.set( 600, 550, 500 );
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize') //per fare in modo che cambi aspetto (poi ci sarà da fare l'update della matr di proiezione)
  onWindowResize() {
    console.log("camera: changed aspect");

    this.camera.aspect = window.innerWidth / window.innerHeight;
  }

}
