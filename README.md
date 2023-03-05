# React Counter App with Bootstrap UI
## Prerequisites
### Before we start, make sure you have the following installed on your system:

* Node.js
* npm or yarn

## Step 1: Create a New React App

First, let's create a new React app using `create-react-app`:

```bash
npx create-react-app my-counter-app
``` 

This will create a new folder called `my-counter-app` with the basic structure of a React app.

## Step 2: Install React Bootstrap

Next, let's install the `react-bootstrap` package using npm or yarn:


```bash
npm install react-bootstrap
``` 

or

```bash
yarn add react-bootstrap
``` 

This package provides Bootstrap components that we can use to build our UI.

## Step 3: Create a Counter Component

Create a new file called `Counter.js` in the `src/components` folder. This file will contain the code for our counter component.

```javascript
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <Button variant="primary" onClick={decrement}>-</Button>
      <p>{count}</p>
      <Button variant="primary" onClick={increment}>+</Button>
    </div>
  );
}

export default Counter;
```

In this code, we define the `Counter` component and initialize its state with a count of 0. We also define two functions `increment` and `decrement` that update the count state when the user clicks the corresponding buttons.

## Step 4: Render the Counter Component

In the `App.js` file, import the `Counter` component and render it:

```javascript
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
``` 

## Step 5: Add Bootstrap CSS

In the `index.js` file, import the necessary CSS files:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
``` 

This will include the Bootstrap CSS in our app.

## Step 6: Test the App

Start the development server by running `npm start` or `yarn start`. This will open the app in your browser at `http://localhost:3000`. You should see the counter app with two buttons and a display for the count.

## Step 7: Handle Negative Numbers
-------------------------------

To handle negative numbers in our counter app, we can add a condition to the `decrement` function that checks if the count is already 0 before decrementing it:


```javascript
const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};
``` 

This will prevent the count from going below 0.

And that's it! You've created a counter app with a Bootstrap UI using React. Save these steps as a Markdown file for future reference.