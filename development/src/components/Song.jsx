/* eslint-disable react/prop-types */
import React from 'react'
import './Song.css'
function Song(props) {
    // maybe holding a list of all the members in the song which is a useState
    // props has song := "tetsumai", "agari yatai", etc.
    // props has members := [member1, member2, "member3", etc.]
        // meaning we need to query into this and get the names of each member, and maybe gen
  return (
    <div id="song-container">
        <ul id="song-member-list">
            {props.songMembers.map((member, index) => {return(
            <div key={index} className='song-member'>
                <li>{member.name}, Gen {member.gen}</li>
                <button className='remove-button' onClick={() => props.addToSong(member)}>x</button>
            </div>)}
                
            )}
        </ul>
        {props.songMembers.length > 0 ? <h3>Members: {props.songMembers.length}</h3> : null}
        {props.songMembers.length > 0 ? <button id="clear-song" onClick={props.clearSong}>Clear Song</button>: null}
    </div>
  )
}

export default Song