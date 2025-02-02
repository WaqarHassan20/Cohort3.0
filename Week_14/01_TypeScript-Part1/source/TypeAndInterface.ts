// 1. Basic Syntax
interface IUser {
    name: string;
    age: number;
  }
  
  type TUser = {
    name: string;
    age: number;
  };
  
  // 2. Extending/Inheritance
  interface IPerson {
    name: string;
  }
  
  interface IUserExtended extends IPerson {
    age: number;
  }
  
  type TPerson = {
    name: string;
  };
  
  type TUserExtended = TPerson & {
    age: number;
  };
  
  // 3. Adding New Properties (Declaration Merging)
  interface IUserMerged {
    name: string;
  }
  
  interface IUserMerged {
    age: number; // Merges with the previous declaration
  }
  
  // 4. Unions and Other Types (Only possible with `type`)
  type ID = string | number;
  type Point = [number, number];
  
  // Example Usage
  const userInterface: IUserExtended = {
    name: "Alice",
    age: 25,
  };
  
  const userType: TUserExtended = {
    name: "Bob",
    age: 30,
  };
  
  const userId: ID = 123; // Can be string or number
  const userPoint: Point = [10, 20]; // Tuple
  
  console.log(userInterface); // { name: "Alice", age: 25 }
  console.log(userType);      // { name: "Bob", age: 30 }
  console.log(userId);        // 123
  console.log(userPoint);     // [10, 20]