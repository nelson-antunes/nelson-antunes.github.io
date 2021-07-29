import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import messages from './i18n.json'

library.add({faLinkedin, faGithub, faTwitter})

const i18n = createI18n({
    fallbackLocale: "en",
    globalInjection: true,
    locale: "pt-br",
    messages
})
createApp(App).use(router).use(i18n).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
