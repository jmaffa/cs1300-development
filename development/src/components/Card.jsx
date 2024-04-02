/* eslint-disable react/prop-types */
import React from 'react'
function Card(props) {
  return (
    <div>
        <h2>{props.member.name}</h2>
        <img src={props.member.photo}></img>
        <h3>Gen {props.member.gen}</h3>
        <h3>Class of {props.member.graduating}</h3>
        <div>
            <h3>Known songs:</h3>
            <ul>
                {props.member.songs.map((song, index) => (
                    <li key={index}>{song}</li>
                ))}
            </ul>
        </div>
        <button onClick={(e) => props.addToSong(props.member)}>{props.songMembers.includes(props.member) ? 'Remove from song' : 'Add to song'}</button>
        
    </div>
  )
}

export default Card