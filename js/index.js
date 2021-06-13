let myAudio = document.getElementById('myAudio');
let cnt=0;
let play =-1;
const Play = ()=>{

    cnt++;
    play=1;
    myAudio.style.display='flex';
    if(cnt%2 == 1)
    myAudio.play();
    else
    myAudio.pause();
    let player = document.getElementById('play');
    let pauser = document.getElementById('pause');
    // player.style.display='none';

}
const Next = ()=>{
    if(play == 1 || play == -1)
   { myAudio.src='./Song/Haradiya.mp3';
   play=2;

}
    else if(play == 2)
   { myAudio.src='./Song/Baarish.mp3';
    play=1;
}

    myAudio.play();
    
}
const Prev = ()=>{
    if(play == 1 || play == -1)
    {myAudio.src='./Song/Haradiya.mp3';
    play =2;
}
    else if(play == 2)
    {
    myAudio.src='./Song/Baarish.mp3';
    play=1;
    }
    myAudio.play();
    
}