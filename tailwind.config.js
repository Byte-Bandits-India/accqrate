/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "4xl": "2560px", // or whatever pixel value you've set
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        anonymous: ['"Anonymous Pro"', "monospace"],
      },
      letterSpacing: {
        heading: "-0.05em",
        para: "-0.02em",
      },
      keyframes: {
        scrollLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        scrollRight: {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 50s linear infinite",
        scrollRight: "scrollRight 50s linear infinite",
        skeleton: "skeleton 1.2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: (function () {
    // Attempt to require optional plugins in a safe way so builds don't fail if
    // a dev dependency wasn't installed (e.g., on CI or Vercel with a stale lockfile).
    let plugins = [];
    try {
      const animate = require("tailwindcss-animate");
      if (animate) plugins.push(animate);
    } catch (e) {
      // plugin missing — continue without it
    }

    plugins.push(function ({ addComponents }) {
      addComponents({
        ".text-fluid-h1": {
          fontSize: "36px",
          lineHeight: "1.2", // ~43px
          "@screen md": { fontSize: "54px", lineHeight: "1.2" }, // ~65px
          "@screen lg": { fontSize: "72px", lineHeight: "1.2" }, // ~86px
        },
        ".text-fluid-h2": {
          fontSize: "24px",
          lineHeight: "1.3", // ~31px
          "@screen md": { fontSize: "32px", lineHeight: "1.3" }, // ~42px
          "@screen lg": { fontSize: "36px", lineHeight: "1.3" }, // ~47px
        },
        ".text-fluid-h3": {
          fontSize: "20px",
          lineHeight: "1.35", // ~27px
          "@screen md": { fontSize: "24px", lineHeight: "1.35" }, // ~32px
          "@screen lg": { fontSize: "30px", lineHeight: "1.35" }, // ~40px
        },
        ".text-fluid-body": {
          fontSize: "16px",
          lineHeight: "1.5", // ~24px
          "@screen md": { fontSize: "18px", lineHeight: "1.5" }, // ~27px
          "@screen lg": { fontSize: "18px", lineHeight: "1.5" }, // ~30px
        },
        ".text-fluid-small": {
          fontSize: "14px",
          lineHeight: "1.5", // ~21px
          "@screen md": { fontSize: "16px", lineHeight: "1.5" }, // ~24px
          "@screen lg": { fontSize: "16px", lineHeight: "1.5" }, // ~27px
        },
      });
    });

    return plugins;
  })(),
};
