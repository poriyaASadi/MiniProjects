import {data} from './data.js';
const dataMusic = [...data];
const $ = document;

// btn switch for show list music 
const btnShowList = $.querySelector('.btnShowList');
// list music box 
const  listAll_music = $.querySelector('.listAll_music');

let imagemusic = $.querySelector('.box-image_music img');
let textmusic = $.querySelector('.box-textmusic p');
let NameMusic = $.querySelector('.boxNameMusic h2');
let AudioPlayer = $.querySelector('.boxAudioPlayer audio');

const btnPlay = $.querySelector('.btnPlay');
const btnpause = $.querySelector('.btnpause');
const btnNext = $.querySelector('.btnNext');
const btnPrev = $.querySelector('.btnPrev');

const rangeMusicInput = $.querySelector('#rangeMusic');

window.addEventListener('load' , () => {

    // 1: The first step of the code 
    for(let i = 0; i < dataMusic.length; i++) {

        // 2: Calling the music list builder function 
        MusicListMaker(dataMusic[i] , i);
    };
    // 3 : calling firstMaker ...
     firstMusic();

     rangeMusicInput.value = 0;
     console.log(rangeMusicInput);
});

function MusicListMaker (musics , index) {

  listAll_music.insertAdjacentHTML('beforeend' , `
       <div class="rowList">
                <div class="boxaboue_listmusic">
                    <span>${index + 1}</span>
                    <h4>${musics.name}</h4>
                </div>
                <div class="iconMusic_list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                      </svg>                      
                </div>
            </div>
    `);
} 

let indexFor_nextAndPrevious = 0

function firstMusic () {
    imagemusic.src = dataMusic[indexFor_nextAndPrevious].srcImage;
    NameMusic.innerHTML = dataMusic[indexFor_nextAndPrevious].name.trim();
    textmusic.innerHTML = dataMusic[indexFor_nextAndPrevious].Musictext.trim();
    AudioPlayer.src = dataMusic[indexFor_nextAndPrevious].src
 };
  
//   btn play music 
 btnPlay.onclick = () => {
    AudioPlayer.play();
    btnPlay.classList.add('activeBtn');
    btnpause.classList.remove('activeBtn');
    // AudioPlayer.playbackRate = 0.8
 }

//   btn puase music
 btnpause.onclick = () => {
    AudioPlayer.pause();
    btnPlay.classList.remove('activeBtn');
    btnpause.classList.add('activeBtn');
 }

//  btn for next music 
btnNext.onclick = () => {
    if (indexFor_nextAndPrevious < dataMusic.length - 1) {
        indexFor_nextAndPrevious = indexFor_nextAndPrevious + 1
        firstMusic();
        AudioPlayer.play();
        btnPlay.classList.add('activeBtn');
        btnpause.classList.remove('activeBtn');
    }else {
        indexFor_nextAndPrevious = 0
        firstMusic();
    } 
}

// btn for previous music 
btnPrev.onclick = () => {
    if (indexFor_nextAndPrevious === 0){
        indexFor_nextAndPrevious = dataMusic.length - 1
        firstMusic();
    }else {    
        indexFor_nextAndPrevious = indexFor_nextAndPrevious - 1
        firstMusic();
        AudioPlayer.play();
        btnPlay.classList.add('activeBtn');
        btnpause.classList.remove('activeBtn');
    }
}

// btn switch for show list music 
btnShowList.addEventListener('click' , () => {
 listAll_music.classList.toggle('active');
})

