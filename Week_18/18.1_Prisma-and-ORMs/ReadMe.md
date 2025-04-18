### npm init -y

### npm install typescript

### npx tsc --init

### change the tsconfig file rootdir = src

### change the tsconfig file outdir = dist

### add the "dev" : "tsc -b && node ./dist/index.js"

### add a directory name src and add file index.ts in it

### Write the simple console.log("Hello world") to test

### then run "npm run dev" to test the file

### Run the npm install prisma

### then run npx prisma init

### Now add the model in the schema.prisma file

### After this migrate this schema on database

### To do this run npx prisma migrate dev

# every time you touch the prisma file you have to migrate the prisma file and run the command npx prisma migrate dev

### Now create a client to handle the database

### For client run command npx prisma generate