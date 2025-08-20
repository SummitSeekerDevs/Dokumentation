<template>
  <v-btn
      class="text-black text-decoration-none"
      append-icon="$download"
      stacked
      :href="fileLink"
      download
      color="grey-lighten-4"
      min-width="750"
  >
    Game Design Documentation herunterladen
  </v-btn>
</template>

<script setup>
import {VBtn} from "vuetify/components";

// import.meta.env.BASE_URL needed to locate file because baseUrl has been changed in config.js
const fileLink = `${import.meta.env.BASE_URL}files/summitseeker_game_design_doc_v__0_1.pdf`;
</script>

