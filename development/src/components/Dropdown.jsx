/* eslint-disable react/prop-types */
import Song from './Song';
import './Dropdown.css'

// Handles the different filter options including possible songs and gens.
function Dropdown(props) {
    const songOptions = ["Agari Yatai", "Cyclone", "Dokokara", "Hachijo", "Jack Bazaar", "Korekara", "Matsuri", "Miyake", "Nadare", "Omiyage", "Tamaire", "Tatsumaki", "Tetsumai", "Yatai", "Yoarashi"];
    const genOptions = [16, 17, 18, 19, 20];

    // Function to handle clearing filters
    const clearFilters = () => {
        props.clearFilters(); 
        // Reset select values to default
        document.getElementById("songSelect").value = 'all';
        document.getElementById("genSelect").value = 'all';
    };

    return (
        <div id='dropdown-container'>
            <select id="songSelect" className="select-song" onChange={props.changeSong}>
                <option value='all'>Choose song</option>
                {songOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <Song song={props.song} songMembers={props.songMembers} clearSong={props.clearSong} addToSong={props.addToSong}></Song>
            <select id="genSelect" className="select-song" onChange={props.changeGen}>
                <option value='all'>Choose gen</option>
                {genOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <button id="clear-filters" onClick={clearFilters}>Clear Filters</button>
        </div>
    );
}

export default Dropdown;