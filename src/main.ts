import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

library.add({faLinkedin, faGithub})

createApp(App).use(router).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
