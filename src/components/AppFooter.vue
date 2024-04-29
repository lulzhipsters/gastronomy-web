<template>
    <footer class="border-t">
        <UHorizontalNavigation :links="links" />
    </footer>
</template>

<script setup lang="ts">
    const links = [
        {
            label: "GitHub",
            to: "https://github.com/lulzhipsters/gastronomy",
            icon: "i-mdi-github"
        }
    ];
</script>