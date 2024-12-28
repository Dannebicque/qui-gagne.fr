<script setup>
  const props = defineProps({
    game: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <div class="avatar" :style="{ backgroundColor: game.color }">{{ game.initiales }}</div>
</template>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  color: white; /* Couleur du texte */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px; /* Bords arrondis */
  font-size: 20px; /* Taille du texte */
  font-weight: bold; /* Texte en gras */
}
</style>
