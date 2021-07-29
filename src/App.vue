<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer
  }
})
</script>

<style global>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  margin: 0
}

:root {
  --dark-secondary: #022738;
  --dark-primary: #26706F;
  --medium-secondary: #4D869E;
  --medium-primary: #28DEAD;
  --light-primary: #3FFCD3;
  --white87: rgba(255,255,255,87);

  background-color: var(--dark-secondary);
  color: var(--white87);
}

a {
  color: var(--medium-primary);
  font-weight: bold;
  text-decoration: none;
}
</style>
