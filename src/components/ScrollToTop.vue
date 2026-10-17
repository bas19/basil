<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import Icon from "./Icon.vue"

const visible = ref(false)
const onScroll = () => (visible.value = window.scrollY > 500)

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll))
</script>

<template>
    <div v-if="visible" class="scroll-top">
        <a href="#top" aria-label="top"><Icon name="arrowUp" :size="35" /></a>
    </div>
</template>

<style scoped>
.scroll-top {
    position: fixed;
    bottom: 2em;
    right: 4em;
    background-color: transparent;
}

@media (max-width: 900px) {
    .scroll-top {
        display: none;
    }
}
</style>
