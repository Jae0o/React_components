import React from 'react'

export default function CategoryFilter({ CategoryList, FilterFunction }) {

  return (
    <div>
      {CategoryList.map((value, index) => {
        return (
          <button key={index} onClick={() => FilterFunction(value)}>
            {value}
          </button>
        )
      })}
    </div>
  )
}
