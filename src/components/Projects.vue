<script setup>
import Icon from "./Icon.vue"
import { projects } from "../content.js"

const base = import.meta.env.BASE_URL
const hostname = (url) => new URL(url).hostname.replace(/^www\./, "")
</script>

<template>
    <section id="projects" class="section">
        <h2 class="section__title">Projects</h2>

        <div class="projects__grid">
            <article v-for="project in projects" :key="project.name" class="card project">
                <img
                    v-if="project.image"
                    :src="`${base}images/${project.image}`"
                    :alt="`${project.name} screenshot`"
                    class="project__image"
                    loading="lazy"
                />

                <h3>{{ project.name }}</h3>
                <p class="project__description">{{ project.description }}</p>

                <div class="project__footer">
                    <ul v-if="project.stack" class="project__stack">
                        <li v-for="item in project.stack" :key="item" class="project__stack-item">{{ item }}</li>
                    </ul>

                    <div class="project__links">
                        <a v-if="project.livePreview" :href="project.livePreview" target="_blank" rel="noopener" class="link project__link">
                            {{ hostname(project.livePreview) }}
                            <Icon name="launch" :size="16" />
                        </a>
                        <span v-else class="project__private">Private project</span>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.projects__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    gap: 2em;
}

/* Column flex so the footer sits at the bottom of every card in a row */
.project {
    display: flex;
    flex-direction: column;
    padding: 1.25em 1.25em 1.5em;
}

.project__image {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
    margin-bottom: 1.2em;
    border: 1px solid var(--clr-border);
    border-radius: 6px;
}

h3 {
    font-size: 1.25rem;
}

.project__description {
    margin-top: 0.6em;
    font-size: 0.95rem;
}

.project__footer {
    margin-top: auto;
    padding-top: 1.2em;
}

.project__stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4em;
}

.project__stack-item {
    padding: 0.2em 0.7em;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--clr-primary);
    background-color: var(--clr-primary-soft);
    border-radius: 999px;
}

.project__links {
    display: flex;
    gap: 1.2em;
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid var(--clr-border);
    font-size: 0.85rem;
    font-weight: 500;
}

.project__link {
    display: inline-flex;
    align-items: center;
    gap: 0.35em;
}

.project__private {
    opacity: 0.75;
}
</style>
