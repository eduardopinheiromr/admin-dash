import {ComponentStyleConfig} from '@chakra-ui/react'

const outlineDisabled = {
  _disabled: {
    bg: 'transparent',
    opacity: '0.7',
    color: 'darkgray',
    border: '2px solid gray',
  },
  _hover: {
    opacity: '0.7',
    _disabled: {
      bg: 'transparent',
      opacity: '0.5',
    },
  },
}

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 16,
    transition: '.3s',
    minH: '44px',
    _disabled: {
      bg: 'gray',
      opacity: '0.7',
    },
    _hover: {
      _disabled: {
        bg: 'gray',
        opacity: '0.5',
      },
    },
  },
  variants: {
    simple: {
      bg: 'transparent',
      _disabled: {
        bg: 'transparent',
      },
      _hover: {
        bg: 'transparent',
      },
      _loading: {
        bg: 'transparent',
      },
    },
    'solid-black': {
      bg: 'rgba(0,0,0,0.8)',
      rounded: 'full',
      color: 'white',
      _hover: {
        bg: 'rgba(0,0,0,0.9)',
      },
    },
    'solid-yellow': {
      bg: 'yellowScheme.600',
      rounded: 'full',
      color: 'black',
    },
    'solid-gray': {
      bg: 'rgba(30,30,30,0.8)',
      rounded: 'full',
      color: 'white',
      // _hover: {
      //   bg: '#000',
      // },
    },
    'solid-green': {
      bg: 'linear-gradient(45deg, rgba(36,75,20,1) 0%, rgba(15,161,18,1) 100%)',
      color: 'white',
      rounded: 'full',
      minW: 200,

      // _hover: {
      //   // filter: 'brightness(1.2)',
      //   color: 'white',
      // },
    },
    'solid-greenV2': {
      bg: '#17A000',
      color: 'white',
      rounded: 'full',
      minW: 200,

      // _hover: {
      //   // filter: 'brightness(1.2)',
      //   color: 'white',
      // },
    },
    'outline-gray': {
      rounded: 'full',
      color: 'darkgray',
      border: '2px solid',
      borderColor: 'darkgray',
      minW: 200,
      ...outlineDisabled,

      // _hover: {
      //   bg: 'darkgray',
      //   color: 'white',
      // },
    },
    'outline-green': {
      color: 'green',
      rounded: 'full',
      border: '2px solid',
      borderColor: 'green',
      minW: 200,
      ...outlineDisabled,

      // _hover: {
      //   bg: 'green',
      //   color: 'white',
      // },
    },
  },
}
