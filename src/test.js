import string from './css'
let string2;
let n=0;
let speed = 300;
let id;
const demo = document.querySelector('#demo');
const demo2 = document.querySelector('#demo2');

const player = {
    init:()=>{
        id = player.play();
        player.bindEvent()
    },
    event : {
        '#btnPause':'pause',
        '#btnPlay' : 'play',
        '#btnSlow' : 'slow',
        '#btnNormal' :'normal',
        '#btnFast' : 'fast'
    },
    bindEvent : ()=>{
       for(let key in player.event){
           if(player.event.hasOwnProperty(key)){
               const value = player.event[key];
               document.querySelector(key).onclick = player[value]
           }
       }
    },
    run : ()=>{
        n++;
        if(n>string.length){
            clearInterval(id);
            return
        }
        string2 = string.substr(0,n);
        demo.innerText = string2;
        demo2.innerHTML = string2;
        demo.scrollTop = demo.scrollHeight
    },
    pause : ()=>{
        window.clearInterval(id);
        console.log(id);
    },
    play : ()=>{
        id = setInterval(player.run,speed);
        return id;
    },
    slow : ()=>{
        player.pause();
        speed = 300;
        player.play();
    },
    normal : ()=>{
        player.pause();
        speed = 100;
        player.play();
    },
    fast : ()=>{
        player.pause();
        speed = 10;
        player.play();
    }
};



player.init();


