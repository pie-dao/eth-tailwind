module.exports = (theme) => ({
  '.connect-button-container': {
    '-webkit-box-align': 'center',
    'align-items': 'center',
    'border-radius': '2rem',
    'display': 'flex',
    'flex-flow': 'row nowrap',
    'font-family': theme('fontFamily.secondary'),
    'font-size': theme('fontSize.xs'),
    'margin': 0,
    'min-width': 0,
    'padding': '0.5rem',
    'user-select': 'none',

    'p': {
      'flex': '1 1 auto',
      'margin-left': 1,
      'margin-right': 2,
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    },
    '.icon-container': {
      'background-color': theme('colors.grey-115'),
      'border-radius': '50%',
      'height': '1rem',
      'width': '1rem',

      '.image-container': {
        'border-radius': '50%',
        'overflow': 'hidden',
        'padding': 0,
        'margin': 0,
        'width': '15px',
        'height': '15px',
        'display': 'inline-block',
        'border-color': theme('colors.white'),
        'border-style': 'solid',
        'border-width': '0.5px',
      },
    },
  },
});
