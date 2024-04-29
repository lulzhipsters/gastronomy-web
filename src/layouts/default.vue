<template>
    <div class="flex flex-col justify-between min-h-screen">
        <AppHeader />
        <main class="mb-auto p-3">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
</script>