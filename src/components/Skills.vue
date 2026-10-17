<script setup>
import { skills } from "../content.js"
</script>

<template>
    <section id="skills" class="section">
        <h2 class="section__title">Skills</h2>

        <dl class="skills narrow">
            <div v-for="group in skills" :key="group.group" class="skills__row">
                <dt class="skills__group">{{ group.group }}</dt>
                <dd>
                    <ul class="skills__list">
                        <li v-for="item in group.items" :key="item" class="skills__item btn btn--plain">{{ item }}</li>
                    </ul>
                </dd>
            </div>
        </dl>
    </section>
</template>

<style scoped>
.skills__row {
    display: grid;
    grid-template-columns: 150px minmax(0, 1fr);
    gap: 1em;
    padding: 1em 0;
    border-bottom: 1px solid var(--clr-border);
}

.skills__row:last-child {
    border-bottom: 0;
}

.skills__group {
    padding-top: 0.35em;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--clr-fg-alt);
}

.skills__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
}

.skills__item {
    padding: 0.35em 0.8em;
    font-size: 0.85rem;
}

@media (max-width: 600px) {
    .skills__row {
        grid-template-columns: 1fr;
        gap: 0.6em;
    }
}
</style>
