Steps to install the Typescript along the compiler of typescript :

1 - npm init -y
2 - npm install typescript
3 - npx tsc --init
4 - now create two folders source and dist
5 - Add these lines at end of tsconfig.json

"rootDir": "./source",
"outDir": "dist"
6 - Now write code in your file
7 - npx tsc -b to compile the code into js
8 - node dist/index.js (or path of file to run code )
