import React from 'react'

export default function CategoryFilter({ FilterCategoryList, UpDateCheckBox, CheckList }) {
  return (
    <form >
      {FilterCategoryList.map((list, index) => {
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
