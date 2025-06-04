import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Test from '../../components/test.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Test', Test)
  }
}
