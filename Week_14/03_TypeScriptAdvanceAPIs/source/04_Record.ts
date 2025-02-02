// This is the ugly approach of writing the code for objects inside objects //

type ValueObject = {
  name: string;
  id: string;
};
type Users = {
  [key: string]: ValueObject;
};
const ListOfUsers = {
  Hello1: { name: "myName1", id: "MyID1" },
  Hello2: { name: "myName2", id: "MyID2" },
};

// This is the ugly approach of writing the code for objects inside objects //
type RecordArgument = {
  id: string;
  name: string;
};
type UsingRecordUsers = Record<string, User>;
const RecordUsers = {
  Hello1: { name: "myName1", id: "MyID1" },
  Hello2: { name: "myName2", id: "MyID2" },
};

// Or we can do this as //
type UsingRecordUsers2 = Record<
  string,
  {
    id: string;
    name: string;
  }
>;

const RecordUsers2 = {
  Hello1: { name: "myName1", id: "MyID1" },
  Hello2: { name: "myName2", id: "MyID2" },
};
