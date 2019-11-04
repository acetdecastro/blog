/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      width: {
        '56': '14rem',
        '68': '17rem',
        '96': '24rem',
        '144': '36rem',
        '192': '48rem',
        '240': '60rem'
      },

      container: {
        center: true,
      },
    }
  },
  variants: {},
  plugins: []
}
