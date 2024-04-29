<template>
    <header class="border-b flex justify-between">
        <div class="m-3 flex items-center">
            <h1 class="whitespace-nowrap text-5xl font-serif">/gastronomy</h1>
            <h2 class="text-sm ml-5 pl-5 border-l text-slate-600">
                <span class="text-black">/ɡaˈstrɒnəmi/</span>
                <br />
                <span class="italic text-slate-400">noun: </span>
                <span>the practice or art of choosing, cooking, and eating good food.</span>
            </h2>
        </div>
        
        <UHorizontalNavigation :links="links" class="w-fit m-3"/>
    </header>
</template>

<script setup lang="ts">
    const links = [
        {
            label: "Recipes",
            to: "/recipes"
        },
        {
            label: "Techniques",
            to: "/techniques"
        }
    ];
</script>