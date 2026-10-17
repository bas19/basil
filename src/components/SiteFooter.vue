<script setup>
import { about } from "../content.js"

const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <p>© {{ year }} {{ about.name }}</p>
    </footer>
</template>

<style scoped>
.footer {
    padding: 3em 0;
    margin-top: 4em;
    text-align: center;
    font-size: 0.9rem;
}

@media (max-width: 600px) {
    .footer {
        padding: 2em;
        margin-top: 3em;
    }
}
</style>
