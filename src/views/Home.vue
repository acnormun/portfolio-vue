<template>
  <v-container class="pa-md-4" :class="'v-row'">
    <v-col cols="4" offset="2">
        <v-avatar image="../assets/img/icons/anaclara.jpeg" size="260"/>
    </v-col>
    <v-divider vertical/>
    <v-col cols="5" offset="1">
      <p class="text-h5 pl-md-4">{{name}}</p>
      <div v-for="item in profile" class="ma-md-4">
        <v-icon v-if="!!item.icon" :icon="item.icon"/>
        {{item.value}}
      </div>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import {computed, reactive, ref, onMounted} from 'vue';
import { mdiAccount } from '@mdi/js'

const name = ref('')
const title = ref('')

const profile = ref([])

onMounted(() => {

  name.value = 'Ana Clara Noronha Muniz'
  title.value = 'Teste'

  profile.value = [
    {
      id: "title",
      value: "Software Engineer - Frontend",
      icon: "mdi-account"
    },
    {
      id: "location",
      value: "Belo Horizonte - MG - Brasil",
      icon: "mdi-map-marker"
    },
    {
      id: "phone",
      value: "+55(31)9 9694-1311",
      icon: "mdi-whatsapp"
    },
    {
      id: "email",
      value: "dev.acnormun@gmail.com",
      icon: "mdi-email"
    },
    {
      id: "github",
      value: "ACNormun",
      icon: "mdi-github"
    }
  ]
})

</script>

<style scoped>



</style>

