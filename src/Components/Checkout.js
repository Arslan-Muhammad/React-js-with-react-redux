import React from 'react'

export default function Checkout(props) {
  return (
    <div style={{ backgroundColor: "grey", height: "50px" }} className="mt-2">
      <h3 className="text-center pt-1">Total:${props.price * props.counter}</h3>
    </div>
  )
}

