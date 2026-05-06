import { defineConfig } from 'minista'
import path from 'path'

/**
 * @see https://minista.qranoko.jp/docs/config-file
 */
export default defineConfig({
  // Корінь проекту (зазвичай не змінюється)
  root: '',

  // Базовий шлях (якщо деплой не в корінь сайту — зміни)
  base: '/',

  // Папка з публічними файлами (копіюються як є)
  public: 'public',

  // Папка для збірки (туди складається результат)
  out: 'dist',

  assets: {
    images: {
      outDir: 'assets/images',
      outName: '[name]',
      remoteName: 'remote',
      optimize: {
        layout: 'constrained',
        breakpoints: [
          360, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840,
        ],
        resolution: [1, 2],
      },
    },

    // Підтримка імпорту SVG як React/JSX-компонентів
    svgr: {
      svgrOptions: {},
    },

    // SVG-спрайт з папки з іконками
    icons: {
      srcDir: 'src/assets/icons',
      outDir: 'assets/images',
      outName: '[dirname]',
      svgstoreOptions: {
        // Видаляємо fill/stroke із символів, щоб керувати кольором через CSS
        cleanSymbols: ['fill', 'stroke'],
      },
    },

    // Шрифти (woff2 тощо)
    fonts: {
      outDir: 'assets/fonts',
      outName: '[name]',
    },

    // Назва основного бандлу
    bundle: {
      outName: 'bundle',
    },
  },

  resolve: {
    // Налаштування аліасу @/ → src/
    alias: [
      {
        find: '@/',
        replacement: path.resolve('src') + '/',
      },
    ],
  },

  css: {
    modules: {
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // Автоматично підключаємо helpers у всі SCSS-файли, крім самого helpers
        additionalData: (content, filepath) => {
          if (filepath.includes('helpers')) return content
          return `@use 'styles/helpers' as *;\n${content}`
        },
        // Шлях відносно src, щоб Sass міг знайти helpers
        includePaths: [path.resolve('src')],
        // Прибираємо попередження від старого API
        silenceDeprecations: ['legacy-js-api'],
      },
      less: {},
      stylus: {},
    },
  },

  // Додаткові опції для Vite
  vite: {
    css: {
      devSourcemap: true,
    },
  },
})