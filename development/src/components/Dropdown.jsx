import React from 'react'

function Dropdown(props) {
    // const [song, setSong] = React.useState("tetsumai")
    const songOptions = ["Agari Yatai", "Cyclone", "Dokokara", "Hachijo", "Jack Bazaar", "Korekara", "Matsuri", "Miyake", "Nadare", "Omiyage", "Tamaire", "Tatsumaki", "Tetsumai", "Yatai", "Yoarashi" ]
    const genOptions = [16, 17, 18, 19, 20]
  return (
    <div>
        {/* <h3>{props.song}</h3> */}
        <select onChange={props.changeSong}>
          <option selected="selected" value='all'>Choose song</option>
            {songOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
            {/* <option value="tetsumai">Tetsumai</option>
            <option value="agari yatai">Agari Yatai</option>
            <option value="koi no hana">Koi no Hana</option> */}
        </select>
        <select onChange={props.changeGen}>
          <option selected="selected" value='all'>Choose gen</option>
            {genOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        <button onClick={props.clearFilters}>Clear Filters</button>
    </div>
  )
}

export default Dropdown