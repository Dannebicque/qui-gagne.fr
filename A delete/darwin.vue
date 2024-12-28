<template>
    <UPage>
        <h1></h1>
        <UPageHeader title="Sur les traces de Darwin" description="Sur les Traces de Darwin est un jeu familial pour 2 à 5 joueurs où des naturalistes complètent leur carnet en sélectionnant des tuiles Animal et Personnage depuis le plateau commun de Voyage." />
        <UPageBody>
        <NbPlayerSelector @update:nbPlayers="(n) => nbPlayers = n" />

        <div v-if="nbPlayers && nbPlayers > 0">
            <table>
                <thead>
                    <tr>
                        <th>Joueur</th>
                        <th>Oiseaux</th>
                        <th>Cartes Bonus</th>
                        <th>Objectifs de manche</th>
                        <th>Oeuf</th>
                        <th>Nourriture stockée</th>
                        <th>Carte recouverte</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="player in parseInt(nbPlayers)" :key="player">
                        <PlayerDarwin
                            :isHighestScoring="player === parseInt(highestScoringPlayer)" @update:score="updateScore(player, $event)"
                            :player="player"></PlayerDarwin>
                    </template>
                </tbody>
            </table>
        </div>
    </UPageBody>
    </UPage>
</template>

<script setup>

import NbPlayerSelector from '~/components/NbPlayerSelector.vue';
import PlayerDarwin from '~/components/PlayerDarwin.vue';
import { computed, ref } from 'vue'
import PlayerWinspan from '~/components/PlayerWinspan.vue'

const nbPlayers = ref(3);

const scores = ref({});

const updateScore = (player, score) => {
  scores.value[player] = score;
};

const highestScoringPlayer = computed(() => {
  return Object.keys(scores.value).reduce((a, b) => scores.value[a] > scores.value[b] ? a : b, null);
});
</script>
