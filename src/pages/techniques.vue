<template>
  <ContentList path="/techniques" v-slot="{ list }">
    <div v-for="technique in list" :key="technique._path">
      <h2>{{ technique.title }}</h2>
      <a :href="technique._path">more...</a>
    </div>
  </ContentList>
</template>
