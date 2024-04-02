import React from 'react'

function Sort(props) {
  return (
    <div>
      <select onChange={props.changeSort}>
        <option value="name">Name</option>
        <option value="gen">Gen</option>
        <option value="graduating">Graduation Year</option>
      </select>
      <button onClick={props.changeOrder}>{props.ascending ? 'Ascending' : 'Descending'}</button>
    </div>
  )
}

export default Sort