/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // μ's — 活力橙/粉
        muse: {
          light: '#FFB6C1',
          DEFAULT: '#FF6B8A',
          dark: '#E0446A',
        },
        // Aqours — 海洋蓝
        aqours: {
          light: '#7EC8E3',
          DEFAULT: '#1E90FF',
          dark: '#005CBF',
        },
        // 虹咲学园 — 优雅紫
        nijigasaki: {
          light: '#C9A0DC',
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
        },
        // Liella! — 希望绿
        liella: {
          light: '#A3E4BC',
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
        // 莲之空 — 天空青
        hasunosora: {
          light: '#A5F3FC',
          DEFAULT: '#06B6D4',
          dark: '#0891B2',
        },
	      // BLUEBIRD / 人生不易部 — 暖橙
	      ikizulive: {
	        light: '#FFB347',
	        DEFAULT: '#FF6B00',
	        dark: '#CC5500',
	      },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
