import { ModernGrid }   from './components/grid/modern-grid'
import { ModernCard }   from './components/card/modern-card'
import { ModernFooter } from './components/footer/modern-footer'
import { ModernHeader } from './components/header/modern-header'
// global css
import '../assets/index.css'

customElements.define('modern-header', ModernHeader)
customElements.define('modern-grid', ModernGrid)
customElements.define('modern-card', ModernCard)
customElements.define('modern-footer', ModernFooter)
