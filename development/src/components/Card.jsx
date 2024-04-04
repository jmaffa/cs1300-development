/* eslint-disable react/prop-types */
import './Card.css'

// Displays members with relevant sorting/filtering information of name, gen, class year, and known songs
function Card(props) {
  return (
    <div className='member-card'>
        <img src={props.member.photo}></img>
        <h2>{props.member.name}</h2>
        <h3>Gen {props.member.gen}</h3>
        <h3>Class of {props.member.graduating}</h3>
        <div className='known-songs'>
            <h3>Known songs</h3>
            <hr/>
            <ul className='known-songs-list'>
                {props.member.songs.map((song, index) => (
                    <li key={index}>{song}</li>
                ))}
            </ul>
        </div>
        <div id='button-container'>
          <button className='add-to-song-but' onClick={() => props.addToSong(props.member)}>{props.songMembers.includes(props.member) ? 'Remove from song' : 'Add to song'}</button>
        </div>
        
    </div>
  )
}

export default Card