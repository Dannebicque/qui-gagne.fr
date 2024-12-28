<script setup lang="ts">

const links = [{
    label: 'Akropolis',
    icon: 'i-heroicons-book-open',
    to: '/jeu/akropolis'
}, {
    label: 'Winspan',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/jeu/winspan'
}, {
    label: 'Darwin',
    icon: 'i-heroicons-rocket-launch',
    to: '/jeu/sur-les-traces-de-darwin'
}, {
  label: 'Harmonies',
  icon: 'i-heroicons-rocket-launch',
  to: '/jeu/harmonies'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Qui gagne ? <UBadge
        label="0.1"
        variant="subtle"
        class="mb-0.5"
      />
    </template>
  </UHeader>
</template>
