<script setup lang="ts">
import AppHeader from '~/layouts/AppHeader.vue'
import AppFooter from '~/layouts/AppFooter.vue'
</script>

<template>
    <div>
        <AppHeader />

        <div id="p-main">
            <div class="p-container">
                <slot />
            </div>
        </div>

        <AppFooter />
    </div>
</template>
