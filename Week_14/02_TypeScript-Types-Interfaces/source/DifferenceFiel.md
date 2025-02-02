### Summary

// Interfaces vs Types: Key Differences

// **When to Use Interfaces**
// Interfaces are ideal for defining a blueprint of an object that can be implemented by classes.
// They can be extended using the `extends` keyword, making them useful for creating a hierarchy of objects.

// **When to Use Types**
// Types are suitable for defining a type alias or a union type.
// They can be used directly and are not abstract, making them useful for defining simple types or combining multiple types using intersection.

// **Key Differences**
// - **Extensibility**: Interfaces can be extended, while types cannot.
// - **Abstractness**: Interfaces are abstract, while types are not.
// - **Use Cases**: Interfaces are useful for defining a blueprint of an object, while types are useful for defining a type alias or a union type.

// ##################### //
// Diff between interface and type is that interface can be implemented as classes while types cannot
// Diff between interface and abstract :
// Abstract classes can have dummy values in them which are overwrited when a proper code is written afterward while in interfaces we cannot write the dummy values

// =============================== main difference =========================== //
// A very big main differnece is that type let you do the intersection and unions while interface cannot do this
