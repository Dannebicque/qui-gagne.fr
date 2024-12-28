<script setup>
import { ref, onMounted, computed } from 'vue'
import NbPlayerSelector from '~/components/NbPlayerSelector.vue'
import PlayerScoreJeu from '~/components/PlayerScoreJeu.vue'

const route = useRoute()
const game = ref(null)
const error = ref('')
const nbPlayers = ref(3)
const scores = ref({})

onMounted(() => {
  const gameTitle = route.params.game
  const foundGame = getGameByTitle(gameTitle)
  if (foundGame) {
    game.value = foundGame
    error.value = false
  } else {
    error.value = true
  }
})

const updateScore = (player, score) => {
  scores.value[player] = score
}

const highestScoringPlayer = computed(() => {
  return calculHighScorePlayer()
})

const calculHighScorePlayer = () => {
  for (let player in scores.value) {
    if (parseInt(player) > nbPlayers.value) {
      delete scores.value[player]
    }
  }

  return Object.keys(scores.value).reduce((a, b) => scores.value[a] > scores.value[b] ? a : b, null)
}

watch(nbPlayers, calculHighScorePlayer)

</script>

<template>
  <UPage v-if="error === false && game">
    <UPageHeader
        v-if="error === false && game"
        :title="game.title"
        :description="game.description"
    >
      <template #icon>
        <AvatarJeu :game="game"/>
      </template>
    </UPageHeader>
    <UPageBody>
      <NbPlayerSelector @update:nbPlayers="(n) => nbPlayers = n"
                        :nbPlayers="3"
                        :game="game"/>

      <div v-if="nbPlayers && nbPlayers > 0">
        <table>
          <thead>
          <tr>
            <th>Joueur</th>
            <th v-for="item in game.items">
              {{ item.title }}
              <span title="Description: {{ item.description }}">&#x3F;</span>

            </th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="player in parseInt(nbPlayers)" :key="player">
            <PlayerScoreJeu
                :isHighestScoring="player === parseInt(highestScoringPlayer)"
                @update:score="updateScore(player, $event)"
                :game="game"
                :player="player"></PlayerScoreJeu>
          </template>
          </tbody>
        </table>
      </div>
    </UPageBody>
  </UPage>
  <UPage v-else>
    Jeu non trouvé
  </UPage>
</template>

