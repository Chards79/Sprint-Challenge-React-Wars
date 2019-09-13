# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library that is used to build user interfaces. It is good for retrieving data from the internet (API's) and using it in your applications. It allows you to create reusable components that can receive changing data, or be duplicated easily.

1. What does it mean to think in react?

React makes you think about apps as you build them. You should start off by drawing up a model that displays the various components that you need based on your data that you are trying to display. At each step you are thinking about what it is that you want the various components to do and how they should look.

1. Describe state.

State is a built-in object for react components. It is where you store property values that belong to the component. It is managed within the component, similar to variabes declared within a function. When the state object changes, the component re-renders.

1. Describe props.

Props, or properties, are plain immutable JavaScript objects that get passed to the component, similar to function parameters. They are how data gets passed from one component to another. This is done via HTML attributes.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

They are operations like data fetching, setting up a subscription, or manually changing the DOM in React components. By using the effect hook, you can perform side effects in function components without writing a class. You can sync effects by using useEffect. That way whenever props change, the state will be set inside useEffect.
