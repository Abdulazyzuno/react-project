import React, { useContext } from 'react'
import { InfoContext } from '../context/test2'

function Component1() {
    const complx = useContext(InfoContext)
    return (
        <div>Hello I am one {complx} </div>
    )
}
function Component2() {
    return (
        <Component1  />
    )
}
function Component3() {
    return (
        <Component2 />
    )
}
function Component4() {
    return (
        <Component3 />
    )
}
export default function ContextExample() {
  return (
    <>
    <Component1/>
    <Component4/>
    </>
  )
}
