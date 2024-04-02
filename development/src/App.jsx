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
    <div>
      <h1>Gendo</h1>
      <Song song={song} songMembers={songMembers} clearSong={clearSong}></Song>
      <Dropdown clearFilters={clearFilters} changeSong={changeSong} song={song} changeGen={changeGen} gen={gen}></Dropdown>
      <Sort changeSort={changeSort} changeOrder={changeOrder} ascending={ascending}></Sort>
      <Roster song={song} gen={gen} gendoData={gendoData} addToSong={addToSong} sort={sort} ascending={ascending} songMembers={songMembers}></Roster>
    </div>
  )
}

export default App