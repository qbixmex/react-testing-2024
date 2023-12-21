# React with Typescript and Testing Library

## TODO

1. [✓] Install React with Typescript
2. [✓] Configure ESLint + Typescript
3. [𝒙] Setup Jest, Testing Library, JSDom
4. [𝒙] Setup React Router Dom

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

__Initialize ESLint Initial Configuration:__

```bash
> npx eslint --init
```

__Install AirBNB Style Guide Plugin:__

```bash
# If you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.

> npx install-peerdeps --dev eslint-config-airbnb
```

__Remove__ ```eslint:recommended``` __if exists.__

__NOTE: If there are other plugins, don't remove them !__

```json
// FROM
"extends": ["eslint:recommended"],

// TO
"extends": [],
```

__Add both plugins to__ ```.eslintrc``` __configuration file:__

```json
"extends": ["airbnb", "airbnb/hooks"]
```

__Install Typescript Plugin:__

```bash
# NPM
> npm i --dev eslint-config-airbnb-typescript

# YARN
> yarn add -D eslint-config-airbnb-typescript

# PNPM
> pnpm add -D eslint-config-airbnb-typescript
```

__Add plugin to__ ```.eslintrc``` __configuration file:__

```json
"extends": [
  // ... other plugins
  "airbnb-typescript"
]
```

__Add the following "eslintrc.cjs" path to include array in:__ ```tsconfig.json```

```json
 "include": [
  "src",
  ".eslintrc.cjs", // <-- Include this new line !
],
```

__Make sure to add Typescript configuration path to parser options:__

```javascript
parserOptions: {
    // ... other options
    project: './tsconfig.json',
},
```

[AirBnB Plugin Documentation Page](https://www.npmjs.com/package/eslint-config-airbnb)

[AirBnB Typescript Plugin Documentation Page](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
## Run development mode

```bash
# NPM
> npm run dev

# YARN
> yarn dev

# PNPM
> pnpm dev
```

## Build project

```bash
# NPM
> npm run build

# YARN
> yarn build

# PNPM
> pnpm build
```

## Preview project

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
