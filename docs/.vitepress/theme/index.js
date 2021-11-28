import './styles.scss'
import DefaultTheme from 'vitepress/theme'

export default {
    ...DefaultTheme,
    NotFound: () => "custom 404",
    // enhanceApp({ app,router,siteData})
}
