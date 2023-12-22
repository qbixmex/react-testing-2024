# React with Typescript and Testing Library

## TODO

1. [✓] Install React with Typescript
2. [✓] Configure ESLint + Typescript
3. [✓] Setup Jest, Testing Library, JSDom
4. [✓] Setup React Router Dom

## 1. Install Dependencies

```bash
# NPM
> npm i

# YARN
> yarn

# PNPM
> pnpm i
```

## 2. Configure ESLint + Typescript

### Initialize ESLint Initial Configuration:

```bash
> npx eslint --init
```

### Install AirBNB Style Guide Plugin:

```bash
# If you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.

> npx install-peerdeps --dev eslint-config-airbnb
```

**Remove ```eslint:recommended``` if exists.**

**NOTE: If there are other plugins, don't remove them !**

```json
// FROM
"extends": ["eslint:recommended"],

// TO
"extends": [],
```

**Add both plugins to ```.eslintrc``` configuration file:**

```json
"extends": ["airbnb", "airbnb/hooks"]
```

### Install Typescript Plugin:

```bash
# NPM
> npm i --dev eslint-config-airbnb-typescript

# YARN
> yarn add -D eslint-config-airbnb-typescript

# PNPM
> pnpm add -D eslint-config-airbnb-typescript
```

** Add plugin to ```.eslintrc``` configuration file:**

```json
"extends": [
  // ... other plugins
  "airbnb-typescript"
]
```

**Add the following "eslintrc.cjs" path to include array in: ```tsconfig.json```**

```json
 "include": [
  "src",
  ".eslintrc.cjs", // <-- Include this new line !
],
```

**Make sure to add Typescript configuration path to parser options:**

```javascript
parserOptions: {
    // ... other options
    project: './tsconfig.json',
},
```

**[AirBnB Plugin Documentation Page](https://www.npmjs.com/package/eslint-config-airbnb)**

**[AirBnB Typescript Plugin Documentation Page](https://www.npmjs.com/package/eslint-config-airbnb-typescript)**

## 3. Testing Suite

**Install "Vitest"**

```bash
# NPM
> npm i --dev vitest

# YARN
> yarn add -D vitest

# PNPM
> pnpm add -D vitest
```

**[Vitest Documentation](https://vitest.dev/)**

**Remove all content from: ```vite.config.ts```
and paste the following code:**

```typescript
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    // you might want to disable it,
    // if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
    open: true,
  },
});
```

**We need to update: ```tsconfig.json``` again:**

```json
"compilerOptions": [
  // ... other configuration options
  "types": [
    // other types ...
    "node", // <- Not Necesary in React, but yo can add it just in case.
    "@testing-library/jest-dom",
  ],
],
"include": [
  "src",
  ".eslintrc.cjs",
  "vite.config.ts", // <-- Add this new line
],
```

**Create Setup Tests File**

```bash
# Run in a terminal window
> touch ./src/setupTests.ts
```

### Install React Testing Library

```bash
# NPM
> NPM install --dev @testing-library/react

# YARN
> yarn add -D @testing-library/react

# PNPM
> pnpm add -D @testing-library/react
```

### Install Jest Dom Library

```bash
# NPM
> NPM install --dev @testing-library/jest-dom

# YARN
> yarn add -D @testing-library/jest-dom

# PNPM
> pnpm add -D @testing-library/jest-dom
```

### Add Configuration to ```.src/setupTests.ts```

```typescript
/* eslint-disable import/no-extraneous-dependencies */
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
```

### Update test script

**NOTE: Probably is going to ask you to install a new dependency jsdom just confirm "yes" !**

```json
"test": "vitest",
```

### Run Test Script

```bash
# NPM
npm test

# YARN
yarn test

# PNPM
pnpm test
```

**Run in watch mode**

```bash
# NPM
npm test --watch

# YARN
yarn test --watch

# PNPM
pnpm test --watch
```

**[Testing Library Documentation](https://testing-library.com/)**

**[Jest Dom Documentation](https://testing-library.com/docs/ecosystem-jest-dom/)**

## Available Scripts

### Run development mode

```bash
# NPM
> npm run dev

# YARN
> yarn dev

# PNPM
> pnpm dev
```

### Build project

```bash
# NPM
> npm run build

# YARN
> yarn build

# PNPM
> pnpm build
```

### Preview project

__Starts a server production mode.__

__IMPORTANT: You must build before run this script.__

```bash
# NPM
> npm run preview

# YARN
> yarn preview

# PNPM
> pnpm preview
```

## Run Tests

```bash
# NPM
> npm test

# YARN
> yarn test

# PNPM
> pnpm test
```
