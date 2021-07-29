<template>
  <div>
    <a class="profiles" target="_blank" href="https://www.linkedin.com/in/nelson-antonio-antunes-junior-b5659199/">
      <FontAwesomeIcon :icon="['fab','linkedin']" />
    </a>
    <a class="profiles" target="_blank" href="https://github.com/nelson-antunes">
      <FontAwesomeIcon :icon="['fab','github']" />
    </a>
    <a class="profiles" target="_blank" href="https://twitter.com/nelson_antunes_">
      <FontAwesomeIcon :icon="['fab','twitter']" />
    </a>
    <a class="profiles" target="_blank" href="https://www.hackerrank.com/nelson_a_antunes">
      <FontAwesomeIcon :icon="['fab','hackerrank']" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.profiles {
  font-size: 1.5rem;
  margin-right: .5rem;

  transition: 200ms;
  &:hover {
    color: var(--light-primary)
  }
}
</style>