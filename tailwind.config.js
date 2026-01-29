/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#020617', // slate-950
                    purple: '#A855F7',
                    pink: '#EC4899',
                    cyan: '#06B6D4',
                    blue: '#3B82F6',
                    emerald: '#10B981',
                }
            },
            backgroundImage: {
                'mesh-hero': `
          radial-gradient(at 40% 20%, rgba(168,85,247,0.3) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(236,72,153,0.3) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(59,130,246,0.3) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(6,182,212,0.3) 0px, transparent 50%)
        `,
                'mesh-dark': `
          radial-gradient(at 0% 0%, rgba(168,85,247,0.15) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(6,182,212,0.15) 0px, transparent 50%)
        `,
                'mesh-card': `
           linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)
        `
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
