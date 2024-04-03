/* eslint-disable react/prop-types */
import React from 'react'
import './Roster.css'
import Card from './Card'
export default function Roster(props) {
  const sortedMembers = props.gendoData.sort((a, b) => {
    if (props.sort === 'name' && props.ascending) {
      return a.name.localeCompare(b.name);
    } else if (props.sort === 'name' && !props.ascending) {
      return b.name.localeCompare(a.name);
    } else if (props.sort === 'graduating' && props.ascending) {
      return a.graduating - b.graduating;
    } else if (props.sort === 'graduating' && !props.ascending) {
      return b.graduating - a.graduating;
    } else if (props.sort === 'gen' && !props.ascending) {
      return b.gen - a.gen;
    } else if (props.sort === 'gen' && props.ascending) {
      return a.gen - b.gen;
    }
    
    return 0; // If props.sort is not recognized
  });
  const filteredMembers = sortedMembers.filter((member) => {
    if (props.song === 'all' && props.gen === 'all') {
      return true;
    }
    if (props.song === 'all' && props.gen !== 'all') {
      return member.gen === parseInt(props.gen);
    }
    if (props.song !== 'all' && props.gen === 'all') {
      return member.songs.includes(props.song);
    }
    return member.songs.includes(props.song) && member.gen === parseInt(props.gen);
  
  });
  return (
    <div>
      <h2>Roster</h2>
      <div id='roster'>
        {filteredMembers.map((member, index) => (
          <Card key={index} member={member} addToSong={props.addToSong} songMembers={props.songMembers}></Card>
        ))}
      </div>
    </div>
    
  )
}
