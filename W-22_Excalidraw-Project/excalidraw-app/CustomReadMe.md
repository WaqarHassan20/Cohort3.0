Steps for initailizing the monorepo turborepo project :

- delete the docs project and clean the app.
- make the backend directories which you want.
- create a file tsconfig.json in your backend directory.
- Extends the all from the packages/typescript-config using path from package.json
- now add the code in the package.json file of your backend directory initailized and created.  
  {
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
  "rootDir": "./src",
  "outDir": "./dist"
  }
  }
- Add these in the package.json file of each of backends
  "build": "tsc -b",
  "start": "node ./dist/index.js",
  "dev": "npm run build && npm run start"
