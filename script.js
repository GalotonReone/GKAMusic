var banner = ['url("resources/1.jpg")' ,'url("resources/2.jpg")' ];
var bannerttile = ["Light" , "Error" ];

function Pre(){
        if(cimage<=0){
            
            cimage = cimage + banner.length;
        document.getElementById("image-sec").style.backgroundImage = banner[cimage-1];
        document.getElementById("titles").innerHTML = bannerttile[cimage-1];
        }
        else {
            cimage--;
            if(cimage<=0){
                cimage = cimage + banner.length;
                document.getElementById("image-sec").style.backgroundImage = banner[cimage-1];
                document.getElementById("titles").innerHTML = bannerttile[cimage-1];
            }
            else{
                document.getElementById("image-sec").style.backgroundImage = banner[cimage-1];
            document.getElementById("titles").innerHTML = bannerttile[cimage-1];
            }
            
        }
       
  

}
function Pos(){

    
    if(cimage>=banner.length-1){
            cimage = 0;
            document.getElementById("image-sec").style.backgroundImage = banner[cimage];
            document.getElementById("titles").innerHTML = bannerttile[cimage];
        }
        else{
            document.getElementById("image-sec").style.backgroundImage = banner[cimage+1];
        document.getElementById("titles").innerHTML = bannerttile[cimage+1];
        cimage++;
        }

    
    }
   
   

var songs = ["resources/1.mp3","resources/emotion.mp3","resources/creep.mp3"];
var songpic = ["resources/song.jpg","resources/Shakti.jpg","resources/Mann.jpg"];
var poster = ["resources/pink.jpg","resources/green.jpg","resources/brown.jpg"]
var songt = ["Grant - Constellation", "GKA - Emotion" , "GKA - Creep"];
var currentsong = 0 , seek , seeking;
var n = 0 , m;
const song = new Audio();
song.src = songs[currentsong];
var cimage = 0;
document.getElementById('b1').addEventListener('onclick',Pre);
document.getElementById('b2').addEventListener('onclick',Pos);
document.getElementById('play').addEventListener('onclick',plays());
var seekbar = document.getElementById('seek').addEventListener('onclick', seek());
var volu = document.getElementById('volo').addEventListener('onclick',vol());
volu = document.getElementById('volo').addEventListener('onmousemove',vol());
document.getElementById('mute').addEventListener('onclick',muted());
song.addEventListener('ontimeupdate',function(){seekupdate();});
var currentvolume;
function plays(){

    if(n==0){
      song.play();
      n=1;
      
      document.getElementById("songtitle").innerHTML = songt[currentsong];
      document.getElementById('playimg').src = "resources/pause.png";
        }
    else{
       song.pause();
     
      n=0;
      document.getElementById('playimg').src = "resources/play.png"; 
    }
    setInterval(seekupdate,1000);
    setInterval(timex,1000);
    setInterval(playnext,1000);
}

while(song.play==true){ seekupdate(); }
if(song.currentTime==song.duration){
    next();
}
function next(){
   
  if(currentsong==2)
  {
    currentsong=0;
    song.src =songs[currentsong];
    song.play();

    document.getElementById('playimg').src = "resources/pause.png";
    document.getElementById("songtitle").innerHTML = songt[currentsong];
    document.getElementById('songpics').src = songpic[currentsong];
    document.getElementById('bgsong').src = poster[currentsong];
    document.getElementById('nexsongs').src = songpic[currentsong];
    document.getElementById('prevsong').src = songpic[currentsong-1];
    if(currentsong<=0)
    {
        document.getElementById('nexsongs').src = songpic[currentsong+1];
        document.getElementById('prevsong').src = songpic[currentsong+2];  
    }
  }

  else{                
    currentsong =currentsong + 1;
    song.src = songs[currentsong];
    song.play();
    document.getElementById('playimg').src = "resources/pause.png";
    document.getElementById("songtitle").innerHTML = songt[currentsong];
    document.getElementById('songpics').src = songpic[currentsong];
    document.getElementById('bgsong').src = poster[currentsong];
    document.getElementById('nexsongs').src = songpic[currentsong+1];
    document.getElementById('prevsong').src = songpic[currentsong-1];

}
}
function prev()
{   
      
    if(currentsong==0){
    currentsong = 2;

    song.src = songs[currentsong];
    song.play();
     document.getElementById('playimg').src = "resources/pause.png";
    document.getElementById("songtitle").innerHTML = songt[currentsong];
    document.getElementById('songpics').src = songpic[currentsong];
    document.getElementById('bgsong').src = poster[currentsong];
     document.getElementById('prevsong').src = songpic[currentsong-1];
     document.getElementById('nexsongs').src = songpic[currentsong+1];
    
      }
      else {
        currentsong = currentsong - 1;
        song.src = songs[currentsong];
        song.play();
        document.getElementById('playimg').src = "resources/pause.png";
        document.getElementById("songtitle").innerHTML = songt[currentsong];
        document.getElementById('songpics').src = songpic[currentsong];
        document.getElementById('bgsong').src = poster[currentsong];
        document.getElementById('prevsong').src = songpic[currentsong-1];
        document.getElementById('nexsongs').src = songpic[currentsong+1];
        if(currentsong<=0)
        {
            document.getElementById('nexsongs').src = songpic[currentsong+1];
            document.getElementById('prevsong').src = songpic[currentsong+2];  
        }

    }
    
} 

function seek()
{
    seekbar = document.getElementById('seek').value;
    song.currentTime = song.duration * (seekbar/100); 
}

function vol()
{
    if(document.getElementById('volo').value == 0)
    {
    song.volume = 0;
    document.getElementById('vmuted').src = "resources/muted.png";  
    }
    else{
    document.getElementById('vmuted').src = "resources/vol.png";
    volu = document.getElementById('volo').value;
    currentvolume = volu/100;
    song.volume = currentvolume;
  }
}

function muted()
{
    if(document.getElementById('volo').value >0){
    song.volume = 0;
    document.getElementById('vmuted').src = "resources/muted.png";
    document.getElementById('volo').value = 0;
    m=1;     
    }
    else {
    song.volume = 0.4;
    document.getElementById('vmuted').src = "resources/vol.png";
    document.getElementById('volo').value = 40; 
     
    
    } 
}

function seekupdate()
{
    var nt = song.currentTime * (100 / song.duration);
    document.getElementById('seek').value = nt;
}

function timex()
{
    document.getElementById('timers').innerHTML =parseInt(song.currentTime);
} 

function playnext()
{
    if(song.currentTime==song.duration){next();}
}
       
      
    
    
    
    
    
                   

    



    



   

    
      
  
   
    
    
    
    
    
     


