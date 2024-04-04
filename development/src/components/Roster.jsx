/* eslint-disable react/prop-types */
import './Roster.css'
import Card from './Card'
// Displays the current roster of members, sorted and filtered based on user input
export default function Roster(props) {
  // Sorts members based on the currently selected sorting method: name, gen, graduating
  const sortedMembers = (props.sort==='all' ? props.gendoData : props.gendoData.sort((a, b) => {
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
    } else if (props.sort === 'all') {
      return 0;
    }
    return 0; // If props.sort is not recognized
  }));

  // Filters the members based on the currently selected song and gen
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
  // Returns the applicable members as a list of cards.
  return (
    <div id='roster'>
      {filteredMembers.map((member, index) => (
        <Card key={index} member={member} addToSong={props.addToSong} songMembers={props.songMembers}></Card>
      ))}
    </div>
    
  )
}
