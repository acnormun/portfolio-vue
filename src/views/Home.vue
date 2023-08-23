<template>
  <v-container class="pa-md-4 .positioning" :class="screenTypes[typeScreen].container" >
    <v-col :cols="screenTypes[typeScreen].avatar.col" :offset="screenTypes[typeScreen].avatar.offset">
      <v-avatar image="../assets/img/icons/anaclara.jpeg" :size="screenTypes[typeScreen].avatar.size"/>
    </v-col>
    <v-divider vertical />
    <v-col :cols="screenTypes[typeScreen].info.col" :offset="screenTypes[typeScreen].info.offset">
      <p class="text-h5 pl-md-4">{{ name }}</p>
      <div v-for="item in profile" class="ma-md-4">
        <v-icon v-if="!!item.icon" :icon="item.icon" />
        {{ item.value }}
      </div>
    </v-col>
  </v-container>

  <Skills/>
</template>

<script setup lang="ts">
import {computed, ref, onMounted, onUnmounted } from "vue";
import { IContact } from "@/interfaces/IContact";
import Skills from "@/components/Skills.vue"

const name = ref("");
const title = ref("");
const width = ref(window.innerWidth);
const typeScreen = computed(() => {
  return width.value <750 ? 'mobile' : 'web'
})

const screenTypes = {
  mobile: {
    container: 'v-col justify-center',
    divisor: 'horizontal',
    avatar: {
      size: 200,
      col: 12,
      offset: 2
    },
    info: {
      col: 0,
      offset: 0
    }
  },
  web: {
    container: 'v-row',
    divisor: 'vertical',
    avatar: {
      size: 260,
      col: 4,
      offset: 2
    },
    info: {
      col: 5,
      offset: 1
    }
  }
}

const profile = ref<IContact[]>([]);


const handleResize = () => {
  width.value = window.innerWidth
}

onMounted(() => {
  console.log(screenTypes[typeScreen.value]);
  
  window.addEventListener('resize', handleResize)
  name.value = "Ana Clara Noronha Muniz";
  title.value = "Teste";

  profile.value = [
    {
      id: "title",
      value: "Software Engineer - Frontend",
      icon: "mdi-account",
    },
    {
      id: "location",
      value: "Belo Horizonte - MG - Brasil",
      icon: "mdi-map-marker",
    },
    {
      id: "phone",
      value: "+55(31)9 9694-1311",
      icon: "mdi-whatsapp",
    },
    {
      id: "email",
      value: "dev.acnormun@gmail.com",
      icon: "mdi-email",
    },
    {
      id: "github",
      value: "ACNormun",
      icon: "mdi-github",
    },
  ];
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>
