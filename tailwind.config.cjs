module.exports = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            cyberDark: '#08090F',
            cyberSlate: '#101118',
            cyberCard: '#14151E',
            neonViolet: '#A995D6',
            neonPurple: '#B39BD9',
            neonCyan: '#B4A4D4',
            neonTeal: '#8F80AB',
          },
          fontFamily: {
            mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            sans: ['Space Grotesk', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
          },
          boxShadow: {
            'neon-violet': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
            'neon-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.45)',
            'dual-glow': '0 0 35px -5px rgba(139, 92, 246, 0.3), 0 0 35px -5px rgba(6, 182, 212, 0.3)',
          }
        }
      }
    };
module.exports.content = ["./index.html", "./projects.html", "./projects/**/*.html", "./js/*.js"];
module.exports.plugins = [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")];
