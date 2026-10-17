<script setup>
import Icon from "./Icon.vue"
import { about } from "../content.js"

const base = import.meta.env.BASE_URL
const { name, nickname, role, description, picture, resume, social } = about
</script>

<template>
    <div class="about">
        <img v-if="picture" :src="`${base}images/${picture}`" :alt="name" class="about__picture" />

        <h1>Hi, I am <span class="about__name">{{ nickname }}.</span></h1>
        <h2 class="about__role">A {{ role }}.</h2>
        <p class="about__desc">{{ description }}</p>

        <div class="about__contact center">
            <a href="#contact">
                <span class="btn btn--outline">Get in touch</span>
            </a>
            <a v-if="resume" :href="base + resume">
                <span class="btn btn--outline">Resume</span>
            </a>
            <a v-if="social.github" :href="social.github" aria-label="github" class="link link--icon">
                <Icon name="github" />
            </a>
            <a v-if="social.linkedin" :href="social.linkedin" aria-label="linkedin" class="link link--icon">
                <Icon name="linkedin" />
            </a>
        </div>
    </div>
</template>

<style scoped>
/* Centered hero column, sharing the page's center axis with the section titles */
.about {
    max-width: 760px;
    margin: 4em auto 0;
    text-align: center;
}

.about__picture {
    width: 96px;
    height: 96px;
    margin: 0 auto 1.5em;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--clr-bg-alt);
    box-shadow: 0 0 0 2px var(--clr-primary), var(--shadow);
}

.about__name {
    color: var(--clr-primary);
}

.about__role {
    margin-top: 0.6em;
}

/* Narrower measure keeps centered lines short and even */
.about__desc {
    font-size: 1rem;
    max-width: 600px;
    margin: 1.5em auto 0;
}

/* gap instead of trailing margins so the row is truly centered */
.about__contact {
    justify-content: center;
    gap: 1em;
    margin-top: 2em;
}

@media (max-width: 600px) {
    .about {
        margin-top: 2em;
    }

    .about__picture {
        width: 72px;
        height: 72px;
    }
}
</style>
