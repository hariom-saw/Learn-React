import React from "react";
import ReactDOM from "react-dom/client";

// JS (transpiled before it reaches the JS) - parcel - Babel.
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render).


// React Element
const heading = (
    <div>
        <h1 id="heading-element"> Hello React, Its React Element </h1>
    </div>
);

/**
 * React Components
 * - Class based Components  - Old
 * - Functional based Components - New  => It just JS function.
 *      Functional Component is a JS function which return React Element(JSX).
 *      Functional Component is a normal JS function which return some JSX.
 * JSX is React Elment.
 */


const Title = () =>  <h2 className="head">This is heading 2</h2>;

// Using Nested Component,It all so called "Component Composition in React".
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {heading}
        <h1 className="heading">Hello Hariom, its React Functional Component</h1>
    </div>
);
const HeadingComponent2 = () => <h1 className="fun-heading">Hello Hariom, its React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);