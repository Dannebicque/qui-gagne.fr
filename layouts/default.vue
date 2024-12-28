<script setup lang="ts">
import AppHeader from '~/layouts/AppHeader.vue'
import AppFooter from '~/layouts/AppFooter.vue'
</script>

<template>
    <div>
        <AppHeader />

        <UMain>
            <UContainer>
                <slot />
            </UContainer>
        </UMain>

        <AppFooter />
    </div>
</template>
