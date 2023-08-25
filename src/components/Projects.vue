<template>

  <v-sheet
  max-width="1800"
>
  <v-slide-group
    show-arrows
  >
    <v-slide-group-item
      v-for="project in projects"
      :key="project.id"
    >
    <v-card
          class="ma-4"
          :height="screenTypes[typeScreen].card.height"
          :width="screenTypes[typeScreen].card.width"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-img src="https://media.istockphoto.com/id/119869211/pt/foto/palomino-p%C3%B4nei-das-ilhas-shetland-equus-caballus-de-p%C3%A9-fundo-branco.jpg?s=612x612&w=0&k=20&c=yQgjItrkpkv2bSXO5kO8tLCz9PvJ6T79PHhMESnl014=">
              <v-card-title>aloooo</v-card-title>
            </v-img>
          </div>
        </v-card>

    </v-slide-group-item>
  </v-slide-group>
</v-sheet>

</template>

<script setup lang="ts">
import { profileData } from "@/data/profile";
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";

const width = ref(window.innerWidth);
const typeScreen = computed(() => {
  return width.value <750 ? 'mobile' : 'web'
})
const handleResize = () => {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

const data = reactive(profileData)
const projects = data.projects.list

const screenTypes = {
  mobile: {
    card: {
      width: 160,
      height: 160,
    }
  },
  web: {
    card:{
      width: 300,
      height: 300
    }
  }
}


</script>
