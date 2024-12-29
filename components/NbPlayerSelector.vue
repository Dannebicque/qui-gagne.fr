<template>
  <UFormGroup label="Nombre de joueurs" name="nbPlayers">
    <Select
        v-model="nbPlayers" :options="players"
        @change="$emit('update:nbPlayers', nbPlayers)"
    />
  </UFormGroup>
</template>

<script setup>

import { onMounted } from 'vue'

defineEmits(['update:nbPlayers'])

const props = defineProps({
  game: {
    type: Object,
    required: true
  },
  nbPlayers: {
    type: Number,
    required: true
  }
})

const players = ref([])
const nbPlayers = ref(props.nbPlayers)

onMounted(() => {
  for (let i = props.game.min; i <= props.game.max; i++) {
    players.value.push(i)
  }
})
</script>
