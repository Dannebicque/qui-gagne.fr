<template>
  <tr :class="{ 'highlight': isHighestScoring }">
    <td>Nom {{ player }}</td>
    <td v-for="(item, index) in game.items" :key="index"><input type="text" v-model="cases[index]"></td>
    <td>{{ total }}</td>
  </tr>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  player: {
    type: Number,
    required: true
  },
  isHighestScoring: Boolean,
  game: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:score'])

const updateScore = () => {
  emit('update:score', score.value)
}
const score = ref(0)
const cases = ref(props.game.items.map(() => 0))


watch(score, updateScore)


const total = computed(() => {
  score.value = cases.value.reduce((acc, item) => acc + parseInt(item), 0)
  return score.value
});

</script>

<style scoped>
.highlight {
  background-color: green;
}
</style>
