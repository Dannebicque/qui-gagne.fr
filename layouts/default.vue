<script setup lang="ts">
import AppHeader from '~/layouts/AppHeader.vue'
import AppFooter from '~/layouts/AppFooter.vue'
</script>

<template>
    <div>
        <AppHeader />

        <main class="flex-grow p-4 m-5">
            <div class="p-container">
                <slot />
            </div>
        </main>

        <AppFooter />
    </div>
</template>
