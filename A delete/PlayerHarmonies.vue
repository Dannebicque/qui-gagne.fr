<template>
  <tr :class="{ 'highlight': isHighestScoring }">
    <td rowspan="2">Nom {{ player }}</td>
    <td>Ressources</td>
    <td><input type="text" v-model="case1"></td>
    <td colspan="2"><input type="text" v-model="case2"></td>
    <td><input type="text" v-model="case3"></td>
    <td colspan="2"><input type="text" v-model="case4"></td>
    <td colspan="2"><input type="text" v-model="case5"></td>
    <td>{{ ssTotal1 }}</td>
    <td rowspan="2">{{ total }}</td>
  </tr>
  <tr :class="{ 'highlight': isHighestScoring }">
    <td>Animaux</td>
    <td><input type="text" v-model="animaux1"></td>
    <td><input type="text" v-model="animaux2"></td>
    <td><input type="text" v-model="animaux3"></td>
    <td><input type="text" v-model="animaux4"></td>
    <td><input type="text" v-model="animaux5"></td>
    <td><input type="text" v-model="animaux6"></td>
    <td><input type="text" v-model="animaux7"></td>
    <td><input type="text" v-model="animaux8"></td>
    <td>{{ ssTotal2 }}</td>
  </tr>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue'

defineProps({
  player: {
    type: Number,
    required: true
  },
  isHighestScoring: Boolean
})


const emit = defineEmits(['update:score'])

const updateScore = () => {
  emit('update:score', score.value)
}
const score = ref(0)

watch(score, updateScore)

const case1 = ref(0)
const case2 = ref(0)
const case3 = ref(0)
const case4 = ref(0)
const case5 = ref(0)

const total = computed(() => {
  score.value =  totalAnimaux() + totalRessources()
  return score.value
})

const ssTotal1 = computed(() => {
  return totalRessources()
})

const totalAnimaux = (() => {
  return parseInt(animaux1.value) + parseInt(animaux2.value) + parseInt(animaux3.value) + parseInt(animaux4.value) + parseInt(animaux5.value) + parseInt(animaux6.value) + parseInt(animaux7.value) + parseInt(animaux8.value)
})

const totalRessources = (() => {
  return parseInt(case1.value) + parseInt(case2.value) + parseInt(case3.value) + parseInt(case4.value) + parseInt(case5.value)
})

const animaux1 = ref(0)
const animaux2 = ref(0)
const animaux3 = ref(0)
const animaux4 = ref(0)
const animaux5 = ref(0)
const animaux6 = ref(0)
const animaux7 = ref(0)
const animaux8 = ref(0)

const ssTotal2 = computed(() => {
  return totalAnimaux()
})

</script>

<style scoped>
.highlight {
  background-color: green;
}
</style>
