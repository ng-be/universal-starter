import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';


const IMPORTS = [
  // The AppServerModule should import your AppModule followed
  // by the ServerModule from @angular/platform-server.
  AppModule,
  ServerModule,
  ModuleMapLoaderModule,
];

const PROVIDERS = [];

@NgModule({
  imports: [
    ...IMPORTS
  ],
  providers: [
    ...PROVIDERS
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
