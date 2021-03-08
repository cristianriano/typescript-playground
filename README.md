# Typescript Playground

## Install

Either:
- npm install -g typescript
- yarn global add typescript

For new project run `tsc --init` to initialize tsconfig.json
## Compile

To compile one file manually run:

```bash
tsc app.ts
```

Or to compile the whole project (all `.ts` files)
```bash
tsc
```

_Note: You can use the --watch or -w flag to track changes and recompile_

Compiled files will be output in `dist` folder.
It will look for `.ts` files in `src` folder

## Start Dev

We use `lite-server`. To start you can run

```bash
yarn start:dev
```