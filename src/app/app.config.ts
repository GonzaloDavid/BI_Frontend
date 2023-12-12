import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { getSettings } from './app.component';
import { ConfigService } from './services/config.service';
import { MessageService, SharedModule } from 'primeng/api';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_INITIALIZER, useFactory: getSettings, deps: [ConfigService], multi: true },
    BrowserModule, BrowserAnimationsModule, 
    SharedModule,FormsModule, ConfigService,MessageService, 
    SharedModule,
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()]
};
