import { ApplicationConfig } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule from @angular/router
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    RouterModule, // Provide RouterModule, but don't call any function here
    provideClientHydration(),
    provideAnimationsAsync()
  ]
};
