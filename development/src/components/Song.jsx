/* eslint-disable react/prop-types */
import React from 'react'

function Song(props) {
    // maybe holding a list of all the members in the song which is a useState
    // props has song := "tetsumai", "agari yatai", etc.
    // props has members := [member1, member2, "member3", etc.]
        // meaning we need to query into this and get the names of each member, and maybe gen
  return (
    <div>
        <h2>{props.song=='all' ? 'Select a song' : props.song}</h2>
        <ul>
            {props.songMembers.map((member, index) => (
                <li key={index}>{member.name} {member.gen}</li>
            ))}
        </ul>
        <h3>Members: {props.songMembers.length}</h3>
        <button onClick={props.clearSong}>Clear Song</button>
    </div>
  )
}

export default Song