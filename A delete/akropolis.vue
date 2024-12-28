<template>
    <UPage>
        <h1></h1>
        <UPageHeader title="Akropolis" description="Akropolis est un jeu de stratégie simple avec des éléments en 3D, où vous devrez gagner du prestige en construisant les meilleures cités au cœur de l'antique Méditerranée." />
        <UPageBody>
        <NbPlayerSelector @update:nbPlayers="(n) => nbPlayers = n" />

        <div v-if="nbPlayers && nbPlayers > 0">
            <table>
                <thead>
                    <tr>
                        <th>Joueur</th>
                        <th>Habitation (Bleu)</th>
                        <th>Marché (Jaune)</th>
                        <th>Caserne (Rouge)</th>
                        <th>Temple (Violet)</th>
                        <th>Parc (Vert)</th>
                        <th>Pierres</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="player in parseInt(nbPlayers)" :key="player">
                        <PlayerAkropolis
                            :isHighestScoring="player === parseInt(highestScoringPlayer)" @update:score="updateScore(player, $event)"
                            :player="player"></PlayerAkropolis>
                    </template>
                </tbody>
            </table>
        </div>
    </UPageBody>
    </UPage>
</template>

<script setup>

import NbPlayerSelector from '~/components/NbPlayerSelector.vue';
import PlayerAkropolis from '~/components/PlayerAkropolis.vue';
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
