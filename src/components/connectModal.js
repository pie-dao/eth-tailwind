module.exports = (theme) => ({
  '.connect-modal-container': {
    'display': 'flex',
    'justify-content': 'center',

    '.error': {
      'align-items': 'center',
      'background-color': theme('colors.white'),
      'display': 'flex',
      'flex-direction': 'column',
      'font-family': theme('fontFamily.secondary'),
      'justify-content': 'center',
      'padding-left': '2%',
      'padding-right': '2%',

      'div': {
        'align-items': 'center',
        'color': theme('colors.grey-10'),
        'display': 'flex',
        'flex-direction': 'row',
        'font-family': theme('fontFamily.primary'),
        'font-size': theme('fontFamily.base'),
        'justify-content': 'center',
        'margin-bottom': '10px',
        'margin-top': '10px',
        'text-align': 'center',
      },

      'img': {
        'height': '200px',
        'margin-right': '10px',
      },
    },

    '.pending': {
      'align-items': 'center',
      'background-color': theme('colors.white'),
      'display': 'flex',
      'flex-direction': 'column',
      'font-family': theme('fontFamily.secondary'),
      'justify-content': 'center',
      'padding-left': '2%',
      'padding-right': '2%',
    },
  },
});
