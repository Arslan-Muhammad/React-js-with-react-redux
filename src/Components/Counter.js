import React from 'react'

export default function Counter(props) {
  return (

    <div style={{ backgroundColor: "yellow", height: "50px" }}>
      <h3 className="text-center pt-1">{props.counter}</h3>
    </div>
  )
}
