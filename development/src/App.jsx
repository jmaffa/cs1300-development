import { useState } from 'react'
import './App.css'
import gendoData from './assets/gendo-data.json'
import Sort from './components/Sort'
import Roster from './components/Roster'
import Dropdown from './components/Dropdown'

// Top level component, manages most of the state of the ap
function App() {
  const [song, setSong] = useState('all')
  const [songMembers, setSongMembers] = useState([])
  const [sort, setSort] = useState('gen')
  const [ascending, setAscending] = useState(true)
  const [gen, setGen] = useState('all')

  // Adds or removes a member from the currently chosen song
  const addToSong = (member) => {
    if (songMembers.includes(member)) {
      setSongMembers(songMembers.filter((m) => m !== member))
      return
    }
    else{
      setSongMembers([...songMembers, member])
    }
  }
  // Changes the currently chosen song based on dropdown selection
  const changeSong = (e) => {
    setSong(e.target.value)
  }
  // Clears all members from the currently chosen song
  const clearSong = () => {
    setSongMembers([])
  }
  // Changes the sorting method for the member list based on dropdown selection
  const changeSort = (e) => {
    setSort(e.target.value)
  }
  // Changes the order of the member list based on ascending/descending toggle
  const changeOrder = () => {
    setAscending(!ascending)
  }
  // Changes the current gen filter
  const changeGen = (e) => {
    setGen(e.target.value)
  }
  // Removes all filters, used with Clear Filters button
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
      {/* Dropdown handles the filters, and the aggregate member list of the current song */}
      <Dropdown clearFilters={clearFilters} changeSong={changeSong}
        song={song} songMembers={songMembers} addToSong={addToSong}
        clearSong={clearSong} changeGen={changeGen} gen={gen} 
        />
      {/* Sort allows users to sort the roster by name, gen, or class year. */}
      <Sort changeSort={changeSort} changeOrder={changeOrder} ascending={ascending}/>
      {/* Roster contains a list of cards of all the members in Gendo Taiko */}
      <Roster 
        song={song} gen={gen} gendoData={gendoData} 
        addToSong={addToSong} sort={sort} ascending={ascending} 
        songMembers={songMembers}
        />
    </div>
  )
}

export default App
