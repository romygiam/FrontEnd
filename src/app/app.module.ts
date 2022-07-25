import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcerdeDeComponent } from './components/acerde-de/acerde-de.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HysComponent } from './components/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcerdeDeComponent,
    LogoapComponent,
    EducacionComponent,
    ExperienciaComponent,
    BannerComponent,
    FooterComponent,
    SocialComponent,
    ProyectoComponent,
    HysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
