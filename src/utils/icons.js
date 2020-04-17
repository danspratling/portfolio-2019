import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLightbulb,
  faShoppingCart,
  faSortAmountUp,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

const initIcons = () => {
  library.add(faLightbulb, faShoppingCart, faSortAmountUp, faUsers)
}

export default initIcons
