<template>

  <div class="text-xl">
    Bienvenue sur <span>Qui Gagne ?</span>, un outil pour calculer les scores de vos jeux de société préférés.
  </div>

  <div>
    <p>Choisissez un jeu pour commencer.</p>
    <div class="flex flex-col gap-2 mt-2">
      <label for="searchQuery">Rechercher</label>
      <InputText v-model="searchQuery" placeholder="Rechercher un jeu..."/>
    </div>

    <div v-if="filteredGames.length" class="mt-2 grid grid-cols-4 gap-4">
      <router-link
          v-for="(game, index) in filteredGames"
          :key="index"
          :to="game.to"
          >
      <Card
          v-bind="game"
          class="shadow-md"
          target="_blank">
        <template #title>
          <AvatarJeu :game="game"/>
          <h2>{{ game.title }}</h2>
        </template>
        <template #content>
          <span class="line-clamp-2">{{ game.description }}</span>
        </template>
      </Card>
      </router-link>
    </div>
    <p v-else>Aucun jeu trouvé.</p>
  </div>
</template>

<script setup>

import { onMounted } from 'vue'
import { getGames } from '~/utils/gameData.js'

const games = ref([])
const searchQuery = ref('')

onMounted(() => {
  games.value = getGames()
})

const filteredGames = computed(() => {
  return games.value.filter(game =>
      game.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})


</script>


