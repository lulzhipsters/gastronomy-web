<template>
    <div class="flex flex-col justify-between min-h-screen">
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
            
            <UHorizontalNavigation :links="headerLinks" class="w-fit m-3"/>
        </header>
        <main class="mb-auto p-3">
            <slot />
        </main>
        <footer class="border-t">
            <UHorizontalNavigation :links="footerLinks" />
        </footer>
    </div>
</template>

<script setup lang="ts">
    const headerLinks = [
        {
            label: "Recipes",
            to: "/recipes"
        },
        {
            label: "Techniques",
            to: "/techniques"
        }
    ];

    const footerLinks = [
        {
            label: "GitHub",
            to: "https://github.com/lulzhipsters/gastronomy",
            icon: "i-mdi-github"
        }
    ];
</script>