/* eslint-disable react/prop-types */
import './Song.css'
// Displays the current song members and allows for removal of members. Also counts the number of members in the song
function Song(props) {
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