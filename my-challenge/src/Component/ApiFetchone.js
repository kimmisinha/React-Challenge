import React, { useState } from 'react'
import Customhook from './Customhook'

function ApiFetchone() {
    const [data]=Customhook("https://jsonplaceholder.typicode.com/todos")
    console.log(data)
  return (
    <>
    {data &&
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
  </>
  )
}

export default ApiFetchone