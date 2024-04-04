/* eslint-disable react/prop-types */
import React from 'react';
import Song from './Song';
import './Dropdown.css'

function Dropdown(props) {
    const songOptions = ["Agari Yatai", "Cyclone", "Dokokara", "Hachijo", "Jack Bazaar", "Korekara", "Matsuri", "Miyake", "Nadare", "Omiyage", "Tamaire", "Tatsumaki", "Tetsumai", "Yatai", "Yoarashi"];
    const genOptions = [16, 17, 18, 19, 20];

    // Function to handle clearing filters
    const clearFilters = () => {
        props.clearFilters(); // Clear filters using the clearFilters prop
        // Reset select values to default
        document.getElementById("songSelect").value = 'all';
        document.getElementById("genSelect").value = 'all';
    };

    return (
        <div id='dropdown-container'>
            {/* <h2><h2>{props.song=='all' ? 'Select a song' : props.song}</h2></h2> */}
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