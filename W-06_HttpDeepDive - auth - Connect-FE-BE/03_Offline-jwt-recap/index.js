// const jwt = require("jsonwebtoken");
// const zod = require("zod");
// const jwt_token = "iLoveYouLoveBaby";

// const emailSchema = zod.string().email();
// const passwordSchema = zod.string().min(6);

// function signJwt(username, password) {
//   const usernameResponse = emailSchema.safeParse(username);
//   const userPassword = passwordSchema.safeParse(password);

//   if (!usernameResponse.success || !userPassword.success) {
//     return null;
//   }

//   const signature = jwt.sign({ username }, jwt_token);
//   return signature;
// }

// const res = signJwt("helloworld", "123123");

// const value = { myName: "cohort3.0", accountNumber: 12345 };

// const token = jwt.sign(value, "helloworld");

// console.log(token);

const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwt_Token = "iLoveYouLoveBaby";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwt_Token
  );

  return signature;
}

function decodeJwt(token) {
  const decodedToken = jwt.decode(token);
  if (decodedToken) return true;
  else return false;
}

function verifyJwt(token) {
  let res = true;
  try {
    jwt.verify(token, jwt_Token);
  } catch (e) {
    res = false;
  }
  return res;

  //   // short code for the above logic
  //   if (jwt.verify(token, jwt_Token)) return true;
  //   else false;
}
const signt = signJwt("helloworld@gmail.com", "12341234");
const response = verifyJwt(signt);

console.log(response);
