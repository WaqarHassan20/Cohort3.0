// first version of code in tsx for given example of Todo
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}
interface TodoInput {
  todo: TodoType;
}
function Todo(input: TodoInput) {
  // body of the function
}
// Rendering the component is as :
<Todo todo={{ title: "hello", description: "this is todo", done: true }} />;

// ==================================================== //
// second version of code in tsx for given example of Todo
interface TodoInput {
  todo: {
    title: string;
    description: string;
    done: boolean;
  };
  // we can also add another key pair value as :
  lastDoneAt: Date;
}
function Todo(input: TodoInput) {}
<Todo
  todo={{ title: "hello", description: "this is todo", done: true }}
  lastDoneAt={Date}
/>;
