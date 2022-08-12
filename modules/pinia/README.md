# 🍍 hello pinia

```javascript
/**
 *
 * 🍍 pinia 🍍
 *      state management
 *
 */
 ```


 Contents:
 -  /data/store.js 
    -  useTodosStore
    -  useCounterStore
 - HelloPinia.vue 
   - wired to both example


## Setup instructions

Installation... easy! just run `yarn add pinia` or for nuxt,  `yarn add @pinia/nuxt` ...and, well... no that's not it. It needs a few extra steps, outlined below after the package install are the setup instructions.

### Vue/Vite Install

```
yarn add pinia
```
Now for the trickier part, and obviously this piece depends on other stuff in the project, but this is the `main.js` that completes the install for non-nuxt... vue 3 with or wihout vite?

```javascript

// main.js 
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './styles/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


```

### Nuxt Install

```
yarn add @pinia/nuxt
```

Then in `nuxt.config.ts` add `@pinia/nuxt` to the modules 
>referred to as buildModules in the docs, but this is nuxt 3 so, modules...

```javascript
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
});
```
And that's it.. nuxt makes adding this *easy!*

