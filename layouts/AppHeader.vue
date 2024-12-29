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
  <Menubar :model="links">
    <template #start>
      <router-link to="/" class="p-mr-2">
        Qui gagne ?
      </router-link>
    </template>
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.to" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
      </a>
    </template>
  </Menubar>
</template>
