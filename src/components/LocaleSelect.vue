<template>
  <div class="select">
    <label for="locale" style="font-size:1.5rem">      
      <FontAwesomeIcon icon="language" />
    </label>
    <select name="locale" id="locale" v-model="locale">
      <option value="pt-br">🇧🇷</option>
      <option value="en">🇺🇸</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    return { 
      locale: useI18n({useScope: "global"}).locale
    }
  },
})
</script>

<style lang="scss" scoped>
.select {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  & * {
    margin-left: .5rem;
  }
}
</style>
