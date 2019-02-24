<template>
  <div class="mainMenu">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Title</div>
      </v-ons-toolbar>

      <p style="text-align: center">
        <v-ons-button @click="$ons.notification.alert('Hello World!')">Click me!</v-ons-button>
      </p>
    </v-ons-page>
  </div>
</template>

<script>
export default {
  name: "mainMenu"
};
</script>
