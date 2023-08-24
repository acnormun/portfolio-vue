<template>
    <v-card height="50" class="ma-md-4 align-center v-row justify-space-around">
        <div v-for="skill in skills" :key="skill.id">
             <i :class="skill.icon"/>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { profileData } from '@/data/profile';
import { onMounted, reactive } from 'vue';

const data = reactive(profileData)
const skills: Array<any> = data.skills

  onMounted(() => {
    console.log(skills)
  })

</script>
