<template>
  <header>
    <nav class="nav">
      <div class="nav-title">
        <router-link to="/">nelson</router-link>
      </div>
      <div class="nav-list">
        <ul>
          <li>
            <router-link to="/portfolio">portfolio</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
}

.nav-title {
  font-size: 2rem;
  margin: 0 .5rem;
}

.nav-list li {
  list-style: none;
}

.nav-list li a {
  color: #022738;
  background-color: var(--medium-green);

  border-radius: 5%;
  padding: .5rem .8rem;
  margin: .5rem;

  transition: 300ms;
}
.nav-list li a:hover {
  background-color: var(--light-green);
}
</style>