<script setup>
import Icon from "./Icon.vue"
import { services } from "../content.js"
</script>

<template>
    <section id="services" class="section">
        <h2 class="section__title">Services</h2>

        <div class="services__grid">
            <div v-for="service in services" :key="service.title" class="card service">
                <span class="service__icon"><Icon :name="service.icon" :size="26" /></span>
                <h4>{{ service.title }}</h4>
                <p class="service__description">{{ service.description }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2em;
}

@media (max-width: 700px) {
    .services__grid {
        grid-template-columns: 1fr;
    }
}

.service__icon {
    display: inline-flex;
    padding: 0.6em;
    margin-bottom: 1em;
    color: var(--clr-primary);
    background-color: var(--clr-primary-soft);
    border-radius: 8px;
}

h4 {
    font-size: 1.1rem;
}

.service__description {
    margin-top: 0.6em;
    font-size: 0.95rem;
}
</style>
