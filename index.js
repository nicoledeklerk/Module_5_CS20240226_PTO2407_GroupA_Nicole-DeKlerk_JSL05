// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Heat Waves", artist: "Glass Animals", genre: "Indie/Alternative" },
    { title: "About damn time", artist: "Lizzo", genre: "Pop" },
    { title: "Dog Days Are Over", artist: "Florence + The Machine", genre: "Indie/Alternative" },
    { title: "First Class", artist: "JackHarlow", genre: "R&B" },
    { title: "Wagon Wheel", artist: "Old Crow Medicine Show", genre: "Country" },
    { title: "Tennessee Whiskey", artist: "Chris Stapleton", genre: "Country" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Country",
    "Rocket": "Indie/Alternative",
    "Groot": "R&B"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    
     const playlistsDiv = document.getElementById('playlists');

    // Clear existing content 
    playlistsDiv.innerHTML = '';

    // Create a playlist for each guardian using map ()
    Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];

        //Filter the songs based on the Guardians preferred genre
        const filteredSongs = songs.filter(song => song.genre === genre);


        // Creat container element for playlist
        const playlistContainer = document.createElement('div');
        playlistContainer.className = 'playlist';

        // Add the guardians name as header element
        const heading = document.createElement('h2');
        heading.textContent = `${guardian}'s Playlist`;
        playlistContainer.appendChild(heading);

        // Add songs to playlist
        filteredSongs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';

            const songTitle = document.createElement('span');
            songTitle.className = 'song-title';
            songTitle.textContent = song.title;

            const songArtist = document.createElement('span');
            songArtist.textContent = ` by ${song.artist}`;

            songDiv.appendChild(songTitle);
            songDiv.appendChild(songArtist);

            playlistContainer.appendChild(songDiv);
        });

        //Adding playlist to the playlist div
        playlistsDiv.appendChild(playlistContainer);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


