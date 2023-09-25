<template>
  <v-sheet max-width="1800">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="project in projects" :key="project.id">
        <v-btn height="100%" flat @click.prevent="rediect(project.link)">
          <v-card
            class="ma-4"
            :height="screenTypes[typeScreen].card.height"
            :width="screenTypes[typeScreen].card.width"
          >
            <v-card-section
              class="d-flex fill-height align-center justify-center teste"
            >
              <v-img :src="project.image" />
            </v-card-section>
          </v-card>
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup lang="ts">
import { profileData } from "@/data/profile";
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";

const width = ref(window.innerWidth);
const typeScreen = computed(() => {
  return width.value < 750 ? "mobile" : "web";
});
const handleResize = () => {
  width.value = window.innerWidth;
};


onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const data = reactive(profileData);
const projects = data.projects.list;

const screenTypes = {
  mobile: {
    card: {
      width: 160,
      height: 160,
    },
  },
  web: {
    card: {
      width: 300,
      height: 300,
    },
  },
};

function rediect(link: string){
  window.location.href = link
}
</script>
