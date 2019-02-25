<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Title</div>
    </v-ons-toolbar>

    <p style="text-align: center">
      <v-ons-button @click="$ons.notification.alert('Hello World!')">Click me!</v-ons-button>
    </p>
    <button @click="dbtest">hola</button>
  </v-ons-page>
</template>

<script>
import loki from "lokijs";
import { persistenceAdapters } from "lokijs";

export default {
  name: "mainMenu",
  methods: {
    dbtest() {
      const lfsa = persistenceAdapters.localStorage;

      var adapter = new lfsa();
      var db = new loki("sandbox.db", {
        adapter: adapter,
        autoload: true,
        autoloadCallback: databaseInitialize,
        autosave: true,
        autosaveInterval: 4000
      });

      function databaseInitialize() {
        var log = db.getCollection("log");
        if (log === null) {
          db.addCollection("log");
        }
        // log some random event data as part of our example
        console.log('log.find():', log.find());
      }
    },
    dbread () {

    }
  }
};
</script>
