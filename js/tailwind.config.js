tailwind.config = {
  // module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#d2af6d",
          focus: "#d2af6d",
        },
        secondary: {
          default: "#00377a",
          focus: "#00377a",
        },
        black: {
          100: "#1a1a1a",
          200: "#535355",
          300: "#9e9e9e",
        },
        success: "#22c55e",
        error: "#ef4444",
        info: "#0ea5e9",
        warning: "#fbbf24",
        disabled: "#e2e8f0",
        borderColor: "#d2d3d4",
        background: " #fff",
        background_light_100: "#f6f6f6",
        background_light_200: "#f2f3f4",
      },
      boxShadow: {
        myShadow1: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        myShadow2: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      },
      raduis: {
        small: "50px",
      },
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1281px",
        "2xl": "1535px",
      },
      padding: {
        DEFAULT: "0.8rem",
        sm: "1.2rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
