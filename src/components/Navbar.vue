<template>
  <header>
    <nav class="nav">
      <div class="nav-title">
        <span>nelson</span>
      </div>
      <div class="nav-elements">
        <div class="menu">
          <router-link class="menu-item" to="/">{{ $t("home") }}</router-link>
          <router-link class="menu-item" to="/cv">{{ $t("resume") }}</router-link>
          <router-link class="menu-item" to="/projects">{{ $t("projects") }}</router-link>
        </div>
        <div class="nav">
          <Profiles />
          <LocaleSelect />
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Profiles from './Profiles.vue'
import LocaleSelect from './LocaleSelect.vue'

export default defineComponent({
  components: {
    Profiles,
    LocaleSelect,
  }
})
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  box-sizing: border-box;
  align-items: center;
}

.nav-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: .5rem 1rem;
}

.nav-elements {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
}


.menu {
  .menu-item {
    border-radius: 5%;

    margin-right: 1rem;
    padding: .5rem .8rem;

    color: var(--medium-primary);
    background-color: var(--dark-secondary);
    
    transition: ease-in-out 300ms;
    
    &:hover {
      /*background-color: var(--light-primary);*/
      box-shadow: 0 0 5px 2px var(--medium-primary);
    }
    &.router-link-active {
      color: var(--dark-secondary);
      background-color: var(--medium-primary);
    }
  }
}

</style>