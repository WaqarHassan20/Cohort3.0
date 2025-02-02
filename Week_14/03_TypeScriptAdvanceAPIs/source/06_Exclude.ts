// Except picking a bunch of values from a long list  we can simply exculde the unwanted values so we uses the Exclude

type EventTypes = "Scroll" | "Move" | "Click";
type SelectedEvents = Exclude<EventTypes, "Move">;

function Scrollfunction(filteredInput: SelectedEvents) {
  console.log("Given Event : ", filteredInput);
}
Scrollfunction("Click"); // Will work fo it
Scrollfunction("Scroll"); // Will work fo it
// Scrollfunction("Move"); // will throw an error

// Explanation : this function will take input an event an then check that either it belongs or satisfy the filteredInput datatype which is selectedEvents and then runs
// Here selectedEvents means that either the value belongs to it or not which is rest of all the values form the eventTypes excluding the Move value
// Hence the remaining vlaues are : Scroll and Click , so function will be fine to work for the values Scroll and Click as Input
