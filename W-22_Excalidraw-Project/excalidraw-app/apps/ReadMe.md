STEPS :

- fist make a package and init it "npm init -y"

- create a tsconfig.json file and add the code in it
  {
  "extends": "@repo/typescript-config/base.json"
  }

- create a src directory and a file index.ts in it or whatever name you want

- write all of the logic you want to write in this ts file

- Add the @repo/... at the start of the package.json file
  e.g : "name": "@repo/db",

- then add the devdependency in the package.json as :
  "devDependencies": {
  "@repo/typescript-config": "workspace:\*"
  },
- then add the exports object with vlaues :
  "exports": {
  "./client": "./src/index.ts"
  },

- now import this package in the http or ws where you want to use
- for this, import it in the package.json file of http or ws :
  "@repo/db": "workspace:\*",
  // if using pnpm use workspace if using npm use asterisk only

- now run the "pnpm install" command in your root folder of project

- now import common packages in your working files of http or ws or react as :