<template>
  <h1>Accueil</h1>

  <UPageHeader title="Accueil"
               description="Bienvenue sur Game Calculator, un outil pour calculer les scores de vos jeux de société préférés."/>

  <UPageBody>
    <p>Choisissez un jeu pour commencer.</p>

    <UFormGroup label="Rechercher" name="Rechercher" class="py-2">
      <UInput v-model="searchQuery" placeholder="Rechercher un jeu..." />
    </UFormGroup>

    <UPageGrid v-if="filteredGames.length" class="pt-2">
      <UPageCard v-for="(game, index) in filteredGames" :key="index" v-bind="game" target="_blank">
        <template #icon>
          <AvatarJeu :game="game" />
        </template>
        <template #description>
          <span class="line-clamp-2">{{ game.description }}</span>
        </template>
      </UPageCard>
    </UPageGrid>
    <p v-else>Aucun jeu trouvé.</p>
  </UPageBody>
</template>

<script setup>

import { onMounted } from 'vue'
import { getGames } from '~/utils/gameData.js'

const games = ref ([])
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


