import React from 'react'

const index = () => {


  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Jim Doe" },
    { id: 4, name: "Jack Doe" },
    { id: 5, name: "Jill Doe" },
    { id: 6, name: "Joe Doe" },
    { id: 7, name: "Judy Doe" },
    { id: 8, name: "Jake Doe" },
    { id: 9, name: "Jasmine Doe" },
    { id: 10, name: "Jared Doe" },
  ]

  return (
    <div>
      {data.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  )
}

export default index
