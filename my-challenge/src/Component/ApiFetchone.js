import React, { useState } from 'react'
import Customhook from './Customhook'

function ApiFetchone() {
    const [data]=Customhook("https://jsonplaceholder.typicode.com/todos")
    console.log(data)
  return (
    <>
    {data &&
      data.slice(0,10).map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
  </>
  )
}

export default ApiFetchone