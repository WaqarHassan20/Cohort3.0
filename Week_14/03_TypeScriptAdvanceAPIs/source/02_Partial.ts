interface PartialUser {
  id: number;
  firstName: string;
  age: number;
  email: string;
  password: string;
}

type InputPropsToBeUpdate = Pick<PartialUser, "id" | "email" | "password">;
type UpdateOptionalProps = Partial<InputPropsToBeUpdate>; // To make them optional we use this

function UpdaterFunction(inputProps: UpdateOptionalProps) {}

UpdaterFunction({
  id: 123, // this is also optional
  email: "NewEmail", // this is also optional
  // password: "newPassword", // this is optional to pass or not either will be fine
});

