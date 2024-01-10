// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { CUSTOM_THEME } from '@/theme/LightTheme'

export default createVuetify(
  {
    theme: {
      defaultTheme: 'CUSTOM_THEME',
      themes: {
        CUSTOM_THEME,
      }
    },
    defaults: {
      VCard: {
          rounded: 'md'
      },
      VTextField: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary'
      },
      VTextarea: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary'
      },
      VSelect: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary'
      },
      VListItem: {
          minHeight: '45px'
      },
      VTooltip: {
          location: 'top'
      }
    }
  }
)
