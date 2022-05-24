import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Factory, Model, Server } from 'miragejs';

import { AppModule } from './app/app.module';
import { guardians } from './app/services/models/guardian.interface';
import { messages } from './app/services/models/message.interface';
import { pets } from './app/services/models/pet.interface';
import { environment } from './environments/environment.prod';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

new Server({
  models: {
    user: Model,
    guardian: Model,
    pet: Model,
    message: Model,
  },

  seeds(server) {
    guardians.forEach((guardian) => {
      server.create('guardian', guardian as Object);
    });

    pets.forEach((pet) => {
      server.create('pet', pet as Object);
    });

    messages.forEach((message) => {
      server.create('message', message as Object);
    });
  },

  routes() {
    this.namespace = environment.API_URL;

    this.get(this.namespace + '/users', (schema) => {
      return {
        pets: schema.all('user').models,
      };
    });

    this.get(this.namespace + '/guardians', (schema) => {
      return {
        pets: schema.all('guardian').models,
      };
    });

    this.get(this.namespace + '/pets', (schema) => {
      return {
        pets: schema.all('pet').models,
      };
    });

    this.post(this.namespace + '/pets', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      console.log(attrs);

      return schema.create('pet', attrs);
    });

    this.get(this.namespace + '/messages', (schema) => {
      return {
        pets: schema.all('message').models,
      };
    });
  },
});
