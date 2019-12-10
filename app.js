const songs = [
    "Born To Be Wasted.flac",
    "Hit'Em Up.m4a",
    "No Sleep Till Brooklyn.mp3",
    "Sabotage.mp3"
]

// CREATE DOM SONGLIST
const createSongList = () => {
    const list = document.createElement('ul')

    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }

    return list
}

document.getElementById('songList').appendChild(createSongList())

// START PLAYING
songList.onclick = (e) => {
    const clickedItem = e.target.innerText
    const source = document.querySelector('#source')
    source.src = 'data/' + clickedItem

    document.querySelector('#currentlyPlaying').innerText = clickedItem

    player.load()
}

// PLAYER CONTROL
const playButton = document.querySelector('.fa-play-circle')
const pauseButton = document.querySelector('.fa-pause-circle')

const playSong = () => {
    if(player.readyState) {
        player.play()
    }
}

const pauseSong = () => {
    player.pause()
}

playButton.addEventListener('click', playSong)
pauseButton.addEventListener('click', pauseSong)

const volumeSlider = document.querySelector('#volumeSlider')
volumeSlider.oninput = (e) => {
    const volume = e.target.value
    player.volume = volume
}

// PROGRESSBAR
const updateProgress = () => {
    const progressBar = document.querySelector('#progress')
    if(player.currentTime > 0) {
        
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}