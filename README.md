
npm run start        # Run in dev-mode
npm run build        # Build
npm run preview      # Local preview of the build

npm run lint:js      # Check JS code
npm run lint:js:fix  # Auto-fix JS code
npm run lint:css     # Check CSS code
npm run lint:css:fix # Auto-fix CSS code
npm run format       # Check formatting
npm run format:fix   # Formatting
npm run lint         # Full code and formatting check without fixes
npm run lint:fix     # Full check with auto-fix and formatting
## ⚙️ 



─ public/               # Static files not processed by the bundler
├── src/
│   ├── assets/           # Images, icons, favicons, and fonts
│   │   ├── favicons/     # Favicons for the website
│   │   ├── fonts/        # Embeddable fonts (woff2, etc.)
│   │   ├── icons/        # SVG icons (for sprite)
│   │   └── images/       # Other images
│   │
│   ├── components/       # Small reusable components (Button, Input, etc.)
│   ├── constants/        # Constants, enums, configs, dictionaries, etc.
│   ├── layouts/          # Structural page components (Header, Content, Section, Footer)
│   ├── modules/          # JavaScript modules (e.g.: OverlayMenu, InputMaskCollection)
│   ├── pages/            # Page files (Minista automatically handles routing from here)
│   ├── sections/         # Reusable page sections (Hero, About, Features, etc.)
│   ├── styles/           # Global project styles (variables, mixins, resets)
│   ├── utils/            # Utility functions (e.g.: pxToRem, debounce)
│   ├── global.jsx        # Global layout for all pages (Minista Feature)
│   └── main.js           # JavaScript entry point logic, running in the browser
│
├── .gitignore             # List of files and folders ignored by Git
├── .prettierignore        # List of files and folders ignored by Prettier
├── eslint.config.js       # ESLint configuration (JS/JSX code checking)
├── jsconfig.json          # Path and autocompletion settings for JS (used by IDE and bundler)
├── minista.config.js      # Minista configuration
├── package.json           # Project dependencies, scripts, metadata
├── package-lock.json      # Locked versions of all installed packages
├── postcss.config.js      # PostCSS configuration (preset-env, pxtorem, etc.)
├── prettier.config.js     # Code auto-formatting settings (Prettier)
├── README.md              # Project documentation (you are currently reading it)
└── stylelint.config.js    # Stylelint configuration (CSS/SCSS checking)
