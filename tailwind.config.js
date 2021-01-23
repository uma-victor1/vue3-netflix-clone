module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "-50": "-50%"
      },
      width: {
        "200": "200%"
      },
      height: {
        "200": "200%"
      },
      minWidth: {
        "50": "50%"
      },
      minHeight: {
        "50": "50%"
      },
      zIndex: {
        "-10": "-10"
      }
    }
  },
  variants: {
    extend: {
      zIndex: ["hover", "active"]
    }
  },
  plugins: []
};
