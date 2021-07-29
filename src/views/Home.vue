<template>
  <article>
    <h1>
      {{ t("hello") }}
    </h1>
    <section>
      🚧 🏗 🚧
    </section>
  </article>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: 'Raiz',
  setup() {
    let { t } = useI18n()
    return { t } 
  }
})
</script>
