import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const recipes = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content-repo/recipes/"}),
    schema: z.object({
        title: z.string().optional()
    })
});

const techniques = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content-repo/techniques/"}),
    schema: z.object({
        title: z.string().optional()
    })
})

export const collections = { recipes, techniques };