# Important note about react variables decalration

There are three ways to declare the variables :
1- creating raw variable .This is very rarely used method in react
2- creating the useState Hook variable
3- creating the useRef Hook variable

We uses the useRef when we have to update the value or state but we don't want to render the whole component again.
So we uses the useRef Hook of react which changes and updates the value but don't render the whole component again.
Best example of this concept is to build a clock with stop and start button.

# using multiple useStates

it is not a better approach to use the unecessary usestates in your component. Dont use the useState variable which does not appear on the UI or in the HTML. Only use which is shown on the UI of the component
