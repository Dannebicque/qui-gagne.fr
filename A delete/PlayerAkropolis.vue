<template>
  <tr :class="{ 'highlight': isHighestScoring }">
    <td>Nom {{ player }}</td>
    <td><input type="text" v-model="case1"> x <input type="text" v-model="coeff1"></td>
    <td><input type="text" v-model="case2"> x <input type="text" v-model="coeff2"></td>
    <td><input type="text" v-model="case3"> x <input type="text" v-model="coeff3"></td>
    <td><input type="text" v-model="case4"> x <input type="text" v-model="coeff4"></td>
    <td><input type="text" v-model="case5"> x <input type="text" v-model="coeff5"></td>
    <td><input type="text" v-model="case6"> x <input type="text" v-model="coeff6"></td>
    <td>{{ total }}</td>
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

const case1 = ref(0);
const case2 = ref(0);
const case3 = ref(0);
const case4 = ref(0);
const case5 = ref(0);
const case6 = ref(0);

const coeff1 = ref(1);
const coeff2 = ref(1);
const coeff3 = ref(1);
const coeff4 = ref(1);
const coeff5 = ref(1);
const coeff6 = ref(1);

const total = computed(() => {
    score.value = (parseInt(case1.value) * parseInt(coeff1.value)) + (parseInt(case2.value) * parseInt(coeff2.value)) + (parseInt(case3.value) * parseInt(coeff3.value)) + (parseInt(case4.value) * parseInt(coeff4.value))
        + (parseInt(case5.value) * parseInt(coeff5.value)) + (parseInt(case6.value) * parseInt(coeff6.value));
    return score.value
});

</script>

<style scoped>
.highlight {
  background-color: green;
}
</style>
