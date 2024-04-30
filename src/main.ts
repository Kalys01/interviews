import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from 'firebase/app'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ProgressSpinner from 'primevue/progressspinner'
import ToastService from 'primevue/toastservice'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyBsRU4duTgQDSBcPawdppnAcrTz97Ratcw',
  authDomain: 'interviews-261e1.firebaseapp.com',
  projectId: 'interviews-261e1',
  storageBucket: 'interviews-261e1.appspot.com',
  messagingSenderId: '507256377924',
  appId: '1:507256377924:web:b6decfd5111acacd11a211'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress-spinner', ProgressSpinner)

app.mount('#app')
