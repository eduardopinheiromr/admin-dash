import {extendTheme} from '@chakra-ui/react'
import {breakpoints} from './breakpoints'
import {components} from './components'
import {styles} from './styles'
import {colors} from './colors'
import {fonts} from './fonts'

const theme = extendTheme({
  breakpoints,
  components,
  styles,
  colors,
  fonts,
})

export default theme
