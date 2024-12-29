<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
})
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
</template>

<style scoped>

</style>
