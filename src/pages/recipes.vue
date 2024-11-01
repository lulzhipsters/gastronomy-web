<template>
    <ContentList path="/recipes" v-slot="{ list }">
      <div v-for="recipe in list" :key="recipe._path">
        <h2>{{ recipe.title }}</h2>
        <a :href="recipe._path">more...</a>
      </div>
    </ContentList>
</template>