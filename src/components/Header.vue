<template>
  <v-container class="pa-md-4 .positioning" :class="screenTypes[typeScreen].container" >
    <v-col :cols="screenTypes[typeScreen].avatar.col" :offset="screenTypes[typeScreen].avatar.offset">
      <v-avatar image="../assets/img/icons/anaclara.jpeg" :size="screenTypes[typeScreen].avatar.size"/>
    </v-col>
    <v-divider vertical />
    <v-col :cols="screenTypes[typeScreen].info.col" :offset="screenTypes[typeScreen].info.offset">
      <p class="text-h5 pl-md-4">{{ name }}</p>
      <div v-for="item in profile" class="ma-md-4" :key="item.id">
        <v-icon v-if="!!item.icon" :icon="item.icon" />
        {{ item.value }}
      </div>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import {computed, ref, onMounted, onUnmounted, reactive } from "vue";
import { IContact } from "@/interfaces/IContact";
import {profileData} from '@/data/profile'

const name = ref("");
const title = ref("");


const screenTypes = {
  mobile: {
    container: 'v-col justify-center',
    divisor: 'horizontal',
    avatar: {
      size: 200,
      col: 10,
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

const data = reactive(profileData)
const profile = ref<IContact[]>([]);

const width = ref(window.innerWidth);
const typeScreen = computed(() => {
  return width.value <750 ? 'mobile' : 'web'
})
const handleResize = () => {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  name.value = "Ana Clara Noronha Muniz";
  title.value = "Teste";
  profile.value = data.header
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>
