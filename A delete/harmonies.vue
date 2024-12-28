<template>
  <UPage>
    <h1></h1>
    <UPageHeader title="Harmonies" description="Dans Harmonies, construisez des paysages en plaçant des jetons de couleur et créez des habitats pour vos animaux."/>
    <UPageBody>
      <NbPlayerSelector @update:nbPlayers="(n) => nbPlayers = n" maxPlayers="4"/>

      <div v-if="nbPlayers && nbPlayers > 0">
        <table>
          <thead>
          <tr>
            <th rowspan="2">Joueur</th>
            <th>Ressources</th>
            <th>Arbres (vert)</th>
            <th colspan="2">Montagnes (gris)</th>
            <th>Champs (jaune)</th>
            <th colspan="2">Eau (bleu)</th>
            <th colspan="2">Bâtiment (rouge)</th>
            <th>Ss. total</th>
            <th rowspan="2">Total</th>
          </tr>
          <tr>
            <th>Animaux</th>
            <th colspan="8"></th>
            <th>Ss. total</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="player in parseInt(nbPlayers)" :key="player">
            <PlayerHarmonies
                :isHighestScoring="player === parseInt(highestScoringPlayer)" @update:score="updateScore(player, $event)"
                :player="player"></PlayerHarmonies>
          </template>
          </tbody>
        </table>
      </div>
    </UPageBody>
  </UPage>
</template>

<script setup>

import NbPlayerSelector from '~/components/NbPlayerSelector.vue'
import PlayerHarmonies from '~/components/PlayerHarmonies.vue'
import { computed, ref } from 'vue'
import PlayerWinspan from '~/components/PlayerWinspan.vue'

const nbPlayers = ref(3)

const scores = ref({});

const updateScore = (player, score) => {
  scores.value[player] = score;
};

const highestScoringPlayer = computed(() => {
  return Object.keys(scores.value).reduce((a, b) => scores.value[a] > scores.value[b] ? a : b, null);
});
</script>
