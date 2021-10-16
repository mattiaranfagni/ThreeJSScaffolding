import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendererComponent } from './features/renderer/renderer.component';
import { SceneCameraComponent } from './features/renderer/scene-camera/scene.component';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    SceneCameraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
