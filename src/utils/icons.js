import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faShoppingCart,
  faSortAmountUp,
  faFunnelDollar,
  faUndoAlt,
} from '@fortawesome/free-solid-svg-icons'

const initIcons = () => {
  library.add(faShoppingCart, faSortAmountUp, faFunnelDollar, faUndoAlt)
}

export default initIcons
