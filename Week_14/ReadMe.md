Steps to install the Typescript along the compiler of typescript :

1 - npm init -y
2 - npm install typescript
3 - npx tsc --init
4 - Add these lines at end of tsconfig.json

"rootDir": "./source",
"outDir": "dist"
5 - Now write code in your file
6 - npx tsc -b to compile the code into js
7 - node dist/index.js (or path of file to run code )
