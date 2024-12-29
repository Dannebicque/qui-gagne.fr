<template>
  <h1>Accueil</h1>

  <PageHeader title="Accueil"
              description="Bienvenue sur Game Calculator, un outil pour calculer les scores de vos jeux de société préférés."/>

  <div>
    <p>Choisissez un jeu pour commencer.</p>

    <InputGroup label="Rechercher" name="Rechercher" class="py-2">
      <InputText v-model="searchQuery" placeholder="Rechercher un jeu..."/>
    </InputGroup>

    <div v-if="filteredGames.length" class="pt-2 flex flex-col gap-6 w-full sm:w-auto">
      <div class="flex flex-col sm:flex-row sm:items-center gap-6">
        <Card v-for="(game, index) in filteredGames" :key="index" v-bind="game" target="_blank">
          <template #title>
            <AvatarJeu :game="game"/>
            {{ game.title }}
          </template>
          <template #content>
            <span class="line-clamp-2">{{ game.description }}</span>
          </template>
        </Card>
      </div>
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


