import Theme from 'vitepress/dist/client/theme-default'
import SmartyUI from '../../../src/buildEntry'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SmartyUI)
  },
}