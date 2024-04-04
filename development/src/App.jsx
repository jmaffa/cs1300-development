import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import gendoData from './assets/gendo-data.json'
// import Card from './components/Card'
import Song from './components/Song'
import Sort from './components/Sort'
import Roster from './components/Roster'
import Dropdown from './components/Dropdown'

function App() {
  // const [count, setCount] = useState(0)
  const [song, setSong] = useState('all')
  const [songMembers, setSongMembers] = useState([])
  const [sort, setSort] = useState('gen')
  const [ascending, setAscending] = useState(true)
  const [gen, setGen] = useState('all')

  const addToSong = (member) => {
    if (songMembers.includes(member)) {
      setSongMembers(songMembers.filter((m) => m !== member))
      return
    }
    else{
      setSongMembers([...songMembers, member])
    }
  }
  const changeSong = (e) => {
    setSong(e.target.value)
  }
  const clearSong = () => {
    setSongMembers([])
  }
  const changeSort = (e) => {
    setSort(e.target.value)
    // console.log(e.target.value)
  }
  const changeOrder = () => {
    setAscending(!ascending)
  }
  const changeGen = (e) => {
    setGen(e.target.value)
  }
  const clearFilters = () => {
    setSong('all')
    setGen('all')
  }
  return (
    <div id='container'>
      <h1>Gendo Song Picker</h1>
      <div id='info'>
        <p>Select a song and add members to it! Use the song and gen filters to find only people that know the song in specific generations. Optionally, choose to sort the member list by name, graduation year, or gen!</p>
      </div>
      <Dropdown clearFilters={clearFilters} changeSong={changeSong}
        song={song} songMembers={songMembers} addToSong={addToSong}
        clearSong={clearSong} changeGen={changeGen} gen={gen} 
        />
      <Sort changeSort={changeSort} changeOrder={changeOrder} ascending={ascending}/>
      <Roster 
        song={song} gen={gen} gendoData={gendoData} 
        addToSong={addToSong} sort={sort} ascending={ascending} 
        songMembers={songMembers}
        />
    </div>
  )
}

export default App
