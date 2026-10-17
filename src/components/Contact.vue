<script setup>
import Icon from "./Icon.vue"
import { about, contact } from "../content.js"
</script>

<template>
    <section id="contact" class="section">
        <h2 class="section__title">Contact</h2>

        <div class="card contact narrow">
            <h3 class="contact__title">Have a project in mind?</h3>
            <p class="contact__text">
                Whether it's a new build, a legacy system that needs care, or a role to fill — tell me what you're working on and I'll get back to you.
            </p>

            <div class="contact__actions center">
                <a :href="`mailto:${contact.email}`">
                    <span class="btn btn--outline">Email me</span>
                </a>
                <a v-if="about.social.linkedin" :href="about.social.linkedin" target="_blank" rel="noopener" aria-label="linkedin" class="link link--icon">
                    <Icon name="linkedin" />
                </a>
                <a v-if="about.social.github" :href="about.social.github" target="_blank" rel="noopener" aria-label="github" class="link link--icon">
                    <Icon name="github" />
                </a>
            </div>

            <a :href="`mailto:${contact.email}`" class="link contact__email">{{ contact.email }}</a>
        </div>
    </section>
</template>

<style scoped>
.contact {
    text-align: center;
    padding: 3em 2em;
}

/* Cards lift on hover elsewhere; a call-to-action panel should stay put */
.contact:hover {
    transform: none;
}

.contact__title {
    font-size: 1.5rem;
}

.contact__text {
    max-width: 480px;
    margin: 0.8em auto 0;
}

.contact__actions {
    justify-content: center;
    gap: 1em;
    margin-top: 2em;
}

.contact__email {
    display: inline-block;
    margin-top: 1.4em;
    font-size: 0.9rem;
    font-weight: 500;
}
</style>
