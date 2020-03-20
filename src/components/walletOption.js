module.exports = (theme) => ({
  '.wallet-option-container': {
    'align-items': 'center',
    'background-color': theme('colors.white'),
    'display': 'flex',
    'flex-direction': 'column',
    'font-family': theme('fontFamily.secondary'),
    'justify-content': 'center',
    'padding-left': '10%',
    'padding-right': '10%',

    '&:focus': {
      'outline': 'none',
    },

    '.provider': {
      'align-items': 'center',
      'border-color': theme('colors.grey'),
      'border-radius': '4px',
      'border-style': 'solid',
      'border-width': '1px',
      'color': theme('colors.grey-10'),
      'cursor': 'pointer',
      'display': 'flex',
      'flex-direction': 'row',
      'font-family': theme('fontFamily.primary'),
      'font-size': theme('fontFamily.base'),
      'font-weight': theme('fontWeight.bold'),
      'justify-content': 'center',
      'margin-bottom': '20px',
      'margin-top': '20px',
      'padding': '20px',
      'text-align': 'center',

      'img': {
        'height': '30px',
        'margin-right': '10px',
      },
    },

    '.title': {
      'font-family': theme('fontFamily.primary'),
      'color': theme('colors.grey-10'),
      'font-size': theme('fontSize.lg'),
      'font-weight': theme('fontWeight.bold'),
      'text-align': 'center',
    },
  },
});
