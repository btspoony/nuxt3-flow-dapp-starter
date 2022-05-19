module.exports = {
  theme: {
    fontFamily: {
      sans: [
        // English Fonts
        "Overpass",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Helvetica",
        // Chinese Fonts, Mac/Win/Linux
        "PingFang SC",
        "Microsoft Yahei",
        "微软雅黑",
        "WenQuanYi Micro Hei",
        // System Fonts
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "sans-serif",
        // emoji fonts
        "apple color emoji",
        "segoe ui emoji",
        "segoe ui symbol",
      ],
      mono: "Overpass Mono, monospace",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
