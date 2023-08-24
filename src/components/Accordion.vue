<template>
  <v-container class="v-col-auto ma-0 px-0">
    <v-expansion-panels multiple >
      <v-expansion-panel
        v-for="panel in panels"
        :key="panel.id"
        class="panel"
      >
      <v-expansion-panel-title class="font-weight-bolds text-h6">
        {{ panel.title }}
      </v-expansion-panel-title>
      <v-expansion-panel-text v-if="panel.content">
        <div v-for="content in panel.content" :key="content.id" class="pa-md-4">
          <p class="font-weight-bold">{{ content.title }}</p>
          <p>{{content.subtitle}}</p>
          <ul v-for="item in content.description" :key="item.id" class="pa-md-4">
            <li>
              {{ item.value}}
            </li>
          </ul>
        </div>
      </v-expansion-panel-text>
      
    </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup lang="ts">
import { profileData } from "@/data/profile";
import {reactive, ref } from "vue";

const data = reactive(profileData)
const panels = data.panels

</script>

<style scoped>
.panel{
  background-color: transparent;
  color: white;
  border: 0.3px solid white;
}

.panel:hover{
  background-color: white;
  color: black;
  transition: .2s ease-in-out;
}
</style>

