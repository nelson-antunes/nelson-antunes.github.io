<template>
  <div class="select">
    <label for="locale"><b>{{ $t("language") }}:</b> </label>
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
