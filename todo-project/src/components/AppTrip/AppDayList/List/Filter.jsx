import React from 'react'

export default function Filter({ FilterList, UpDateCheckBox, CheckList, name }) {
  return (
    <form >
      <p>{name}</p>
      {FilterList.map((list, index) => {
        return (
          <div key={index}>
            <input
              id={list}
              type='checkbox'
              checked={CheckList.includes(list)}
              onChange={(e) => {
                UpDateCheckBox(e, list.trim())
              }}
            />

            <label htmlFor={list}>{list}</label>
          </div>

        )
      })}
    </form>

  )
}
