import React from 'react'
import { render } from 'react-dom'

import Playground from './components/Playground'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function Header(props) {
  console.log(props)
  return (
    <div>
      <h1 className='header'>{props.headerText}</h1>
      <p>{props.dateText}</p>
      <span>{props.tempText}</span>
    </div>
  )
}

function App(props) {
  return (
    <div className='container'>
      {/* <Header
        headerText='This is the Header'
        dateText='this is the Date'
        tempText='This is the Temp'
      /> */}
      {/* <Header
        headerText='This is the Header too'
        dateText='Date too'
        tempText='Temp too'
      />
      <Header
        headerText='This is the Header too'
        dateText='Date too'
        tempText='Temp too'
      /> */}
      <h1>Welcome to React, Web {props.cohort}</h1>
      <Playground />
    </div>
  )
}

render(<App cohort='44' />, document.querySelector('#root'))
