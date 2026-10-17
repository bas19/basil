<script setup>
import { experience, education, training } from "../content.js"
</script>

<template>
    <section id="experience" class="section">
        <h2 class="section__title">Experience</h2>

        <ol class="timeline narrow">
            <li v-for="job in experience" :key="job.company" class="timeline__item">
                <div class="job__head">
                    <h4>{{ job.role }} <span class="job__company">@ {{ job.company }}</span></h4>
                    <p class="job__meta">{{ job.period }}<template v-if="job.location"> · {{ job.location }}</template></p>
                </div>
                <ul class="job__highlights">
                    <li v-for="h in job.highlights" :key="h">{{ h }}</li>
                </ul>
            </li>
        </ol>

        <div class="narrow learning">
            <h3 class="learning__title">Education &amp; Training</h3>
            <ul class="learning__list">
                <li v-for="item in [...education, ...training]" :key="item.title" class="learning__item">
                    <div>
                        <h4>{{ item.title }}</h4>
                        <p class="learning__school">{{ item.school }}</p>
                    </div>
                    <p class="job__meta">{{ item.period }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.timeline {
    list-style: none;
    border-left: 2px solid var(--clr-border);
    margin-top: 0.5em;
}

.timeline__item {
    position: relative;
    padding: 0 0 2.5em 2em;
}

.timeline__item:last-child {
    padding-bottom: 0;
}

/* Timeline node; the latest role is filled */
.timeline__item::before {
    content: "";
    position: absolute;
    left: -7px;
    top: 0.3em;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--clr-bg);
    border: 2px solid var(--clr-primary);
}

.timeline__item:first-child::before {
    background-color: var(--clr-primary);
}

.job__head {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.2em 1em;
}

h4 {
    font-size: 1.1rem;
}

.job__company {
    color: var(--clr-primary);
}

.job__meta {
    font-size: 0.85rem;
    font-weight: 500;
    opacity: 0.85;
}

.job__highlights {
    margin-top: 0.8em;
}

.job__highlights li {
    position: relative;
    padding-left: 1.1em;
    margin-top: 0.35em;
    font-size: 0.95rem;
}

.job__highlights li::before {
    content: "–";
    position: absolute;
    left: 0;
    color: var(--clr-primary);
}

.learning {
    margin-top: 4em;
}

.learning__title {
    font-size: 1.2rem;
    margin-bottom: 0.6em;
}

.learning__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.2em 1em;
    padding: 1em 0;
    border-bottom: 1px solid var(--clr-border);
}

.learning__item:last-child {
    border-bottom: 0;
}

.learning__item h4 {
    font-size: 1rem;
}

.learning__school {
    font-size: 0.9rem;
}

@media (max-width: 600px) {
    .timeline__item {
        padding-left: 1.4em;
    }
}
</style>
