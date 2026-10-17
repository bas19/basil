<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import Icon from "./Icon.vue"
import { header } from "../content.js"

const links = ["services", "projects", "experience", "skills", "contact"]

const theme = ref(document.documentElement.classList.contains("dark") ? "dark" : "light")
const menuOpen = ref(false)
const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 8)

onMounted(() => {
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll))

const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark"
    document.documentElement.className = theme.value
    try {
        localStorage.setItem("theme", theme.value)
    } catch {}
}
</script>

<template>
    <header class="site-header" :class="{ scrolled }">
        <div class="header center">
            <h3><a href="#top" class="link">{{ header.title }}</a></h3>

            <nav class="center">
                <ul class="nav__list" :class="{ open: menuOpen }">
                    <li v-for="id in links" :key="id" class="nav__list-item">
                        <a :href="`#${id}`" class="link link--nav" @click="menuOpen = false">{{ id }}</a>
                    </li>
                </ul>

                <button type="button" class="btn btn--icon nav__theme" aria-label="toggle theme" @click="toggleTheme">
                    <Icon :name="theme === 'dark' ? 'sun' : 'moon'" />
                </button>

                <button
                    type="button"
                    class="btn btn--icon nav__hamburger"
                    aria-label="toggle navigation"
                    @click="menuOpen = !menuOpen"
                >
                    <Icon :name="menuOpen ? 'close' : 'menu'" />
                </button>
            </nav>
        </div>
    </header>
</template>

<style scoped>
/* No backdrop-filter here: it would trap the fixed mobile menu inside the header */
.site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--clr-bg);
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.site-header.scrolled {
    border-bottom-color: var(--clr-border);
    box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.25);
}

.header {
    height: 5em;
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
}

.nav__list {
    margin-right: 1.5em;
    display: flex;
}

.nav__list-item {
    margin-left: 1.5em;
}

.nav__hamburger {
    display: none;
}

@media (max-width: 600px) {
    .header {
        height: 4.5em;
    }

    .nav__list {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        inset: 0;
        z-index: 2;
        margin: 0;
        background-color: var(--clr-bg);
    }

    .nav__list.open {
        display: flex;
    }

    .nav__list-item {
        margin: 0.5em 0;
    }

    .nav__hamburger {
        display: flex;
        position: relative;
        z-index: 3;
        margin-left: 0.8em;
    }
}
</style>
