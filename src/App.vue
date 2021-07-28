<template>
  <NelsonHeader />
  <router-view />
  <NelsonFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NelsonHeader from './components/NelsonHeader.vue'
import NelsonFooter from './components/NelsonFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    NelsonHeader,
    NelsonFooter
  }
})
</script>

<style>
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
  --dark-blue: #022738;
  --dark-green: #26706F;
  --medium-blue: #4D869E;
  --medium-green: #28DEAD;
  --light-green: #3FFCD3;
  --white87: rgba(255,255,255,87);

  background-color: var(--dark-blue);
  color: var(--white87);
}

a {
  color: var(--medium-green);
  font-weight: bold;
  text-decoration: none;
}

</style>
