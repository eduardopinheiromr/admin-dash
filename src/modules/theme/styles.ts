export const styles = {
  global: {
    img: {
      userSelect: 'none',
    },
    // body: {
    //   filter: 'invert(1)',
    //   img: {
    //     filter: 'invert(1)',
    //   },
    // },
    '.swiper': {
      '.swiper-pagination-bullet-active': {
        bg: 'white',
        opacity: '1!important',
      },

      '&.home-swiper': {
        '.swiper-pagination-bullet': {
          bg: '#999',
        },
        '.swiper-pagination-bullet-active': {
          bg: '#333',
        },
      },
    },
    '.swiper-pagination-bullet': {
      bg: 'white',
      opacity: 0.7,
    },
    '.yarl__container.yarl__flex_center': {
      bg: 'rgba(0,0,0,0.9)!important',
    },
    '.yarl__thumbnails_container.yarl__flex_center': {
      bg: 'rgba(0,0,0,0.9)!important',
    },
    '.yarl__thumbnails_thumbnail': {
      border: 'none!important',
      bg: 'rgba(0,0,0,0.5)!important',
    },
    '::-webkit-scrollbar': {
      display: {base: 'none', lg: 'block'},
      // width: '0px',
      width: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#666',
    },
    html: {
      // filter: 'invert(1)',
      // img: {
      //   filter: 'invert(1)',
      // },
      scrollBehavior: 'smooth',
      maxWidth: '100vw!important',
      overflowX: 'hidden!important',
      'input::-webkit-input-placeholder': {
        color: 'gray',
      },

      'input:-moz-placeholder': {
        color: 'gray',
      },
    },
    '::placeholder': {
      color: 'lightGrayScheme.600',
    },

    '@keyframes fadeIn': {
      from: {opacity: 0},
      to: {opacity: 1},
    },
    '@keyframes fadeInRotating': {
      '0%': {opacity: 0, transform: 'rotate(0deg)', filter: 'blur(3px)'},
      '100%': {
        opacity: 1,
        transform: 'scale(1.02) rotate(-2deg)',
        filter: 'blur(0px)',
      },
    },
    '@keyframes pulseNotification': {
      '0%': {opacity: 1},
      '50%': {opacity: 0.7},
      '100%': {opacity: 1},
    },
  },
}
