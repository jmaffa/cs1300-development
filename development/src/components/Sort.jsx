/* eslint-disable react/prop-types */
import './Sort.css'
// Allows users to sort baesd on name, gen, or class year. Defaults to name in ascending order (A-Z)
function Sort(props) {
  return (
    <div id='sort-container'>
      <h3>Sort roster by:</h3>
      <select id='sort-select' onChange={props.changeSort}>
        <option value="name">Name</option>
        <option value="gen">Gen</option>
        <option value="graduating">Graduation Year</option>
      </select>
      <button id='sort-ascending' onClick={props.changeOrder}>{props.ascending ? 'Ascending' : 'Descending'}</button>
    </div>
  )
}

export default Sort