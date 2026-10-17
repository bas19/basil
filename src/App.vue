<script setup>
import SiteHeader from "./components/SiteHeader.vue"
import About from "./components/About.vue"
import Services from "./components/Services.vue"
import Projects from "./components/Projects.vue"
import Experience from "./components/Experience.vue"
import Skills from "./components/Skills.vue"
import Contact from "./components/Contact.vue"
import ScrollToTop from "./components/ScrollToTop.vue"
import SiteFooter from "./components/SiteFooter.vue"
</script>

<template>
    <div id="top">
        <SiteHeader />
        <main>
            <About />
            <Services />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
        </main>
        <ScrollToTop />
        <SiteFooter />
    </div>
</template>
