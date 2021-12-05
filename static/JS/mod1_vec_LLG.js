let clicks = 0;
const start = Date.now();
let answer;

document.onclick = function(){
  clicks += 1;
}
/* 
###########################################
#                                         #
#                                         #
#     Box-Sizing based on Screen Size     #
#                                         #
#                                         #
###########################################
*/

// Set the width and height so it doesn't resize with the window
document.querySelector("#cs0").style.width = String(0.85*w) + "px";
document.querySelector("#cs0").style.height = String(0.675*h) + "px";
document.querySelector("#cs1").style.width = String(0.85*w) + "px";
document.querySelector("#cs1").style.height = String(0.675*h) + "px";
document.querySelector("#cs2").style.width = String(0.85*w) + "px";
document.querySelector("#cs2").style.height = String(0.675*h) + "px";
document.querySelector("#cs3").style.width = String(0.85*w) + "px";
document.querySelector("#cs3").style.height = String(0.675*h) + "px";
document.querySelector("#question").style.width = String(0.85*w) + "px";
document.querySelector("#question").style.height = String(0.675*h) + "px";

// Toggle Dim navbar/footer when video is playing
const isPlaying = () => {
    document.getElementById("navbar").style.opacity = "0.4";
    document.getElementById("bottombar").style.opacity = "0.4";
}

const notPlaying = () => {
  document.getElementById("navbar").style.opacity = "1";
  document.getElementById("bottombar").style.opacity = "1";
}

/* 
###########################################
#                                         #
#       Frame 0 function fires when       #
#         showing/hiding Frame 0          #
#                                         #
#    If show === true:                    #
#        -Frame 0 displays                #
#                                         #
#    If show === false:                   #
#        - Frame 0 hidden                 #
#                                         #
###########################################
*/

const frame0 = (show) => {
  if (show) {
    document.querySelector("#btn1").addEventListener("click",()=>{
      frame0(false); 
      frame1(true);
    })
    document.querySelector("#cs0").style.display = "grid";
  }
  else {
    document.querySelector("#cs0").style.display = "none";
  }
};

/* 
###########################################
#                                         #
#    Frame 1 function fires when going    #
#    from frame 0 -> 1 or 2 -> 1          #
#                                         #
#    If show === true:                    #
#        -Frame 1 displays                #
#        -#audio 1 listenters             #
#        -anime js timeline               #
#        -setInterval syncs audio         #
#           and animation                 #
#                                         #
#    If show === false:                   #
#        - Frame 1 hidden                 #
#        - clear #audio1 listeners        #
#        -clearInterval audio/anime       #
#                                         #
#                                         #
###########################################
*/

const frame1 = (show) => {
  if (show){
    document.querySelector("#cs1").style.display = "grid";

    let box1 = false;
    let box2 = false;
    let box3 = false;

    const sclrStmnt = document.querySelector("#scalar-stmnt");
    const thermo = document.querySelector("#thermo");
    const watch = document.querySelector("#watch");
    const scalars = document.querySelector("#scalars");
    const dist = document.querySelector("#dist");
    const disp = document.querySelector("#disp");
    const areaStmnt = document.querySelector("#area-stmnt");
    const areaPic = document.querySelector("#area-pic");
    const vecStmnt = document.querySelector("#vec-stmnt");
    const vecPic = document.querySelector("#vec-pic");
    const btn3 = document.querySelector("#btn3");
    const btn2 = document.querySelector("#btn2");

    scalars.addEventListener("mouseenter",()=>{
      sclrStmnt.style.opacity = 1;
      thermo.style.opacity = 1;
      watch.style.opacity = 1;
      scalars.style.backgroundColor = "#6c63ff";
      dist.style.opacity = 0.4;
      disp.style.opacity = 0.4;
      box1 = true;
    })

    scalars.addEventListener("mouseleave",()=>{
      sclrStmnt.style.opacity = 0;
      thermo.style.opacity = 0;
      watch.style.opacity = 0;
      scalars.style.backgroundColor = "#8c979d";
      dist.style.opacity = 1;
      disp.style.opacity = 1;
    })

    dist.addEventListener("mouseenter",()=>{
      areaStmnt.style.opacity =1;
      areaPic.style.opacity = 1;
      scalars.style.opacity =0.4;
      disp.style.opacity = 0.4;
      dist.style.backgroundColor = "#6c63ff";
      box2 = true;
    })

    dist.addEventListener("mouseleave",()=>{
      areaStmnt.style.opacity =0;
      areaPic.style.opacity = 0;
      scalars.style.opacity =1;
      disp.style.opacity = 1;
      dist.style.backgroundColor = "#8c979d";
    })

    disp.addEventListener("mouseenter",()=>{
      vecStmnt.style.opacity =1;
      vecPic.style.opacity = 1;
      scalars.style.opacity =0.4;
      dist.style.opacity = 0.4;
      disp.style.backgroundColor = "#6c63ff";
      box3 = true;
    })

    disp.addEventListener("mouseleave",()=>{
      vecStmnt.style.opacity =0;
      vecPic.style.opacity = 0;
      scalars.style.opacity =1;
      dist.style.opacity = 1;
      disp.style.backgroundColor = "#8c979d";
    })

    btn2.addEventListener("click",)

    btn3.addEventListener("click",()=>{
      if(box1 && box2 && box3){
        frame1(false);
        frame2(true);
      }
      else {
        let msg = "";
        if (!box1){
          msg += " you missed the scalars button"
        }
        if (!box2){
          msg += "\n you missed the distance button"
      }
        if (!box3){
          msg += "\n you missed the displacement button"
        }
      alert(msg)
    }})
  } else {
      document.querySelector("#cs1").style.display = "none";
    }}


/* 
###########################################
#                                         #
#    Frame 2 function fires when going    #
#    from frame 1 -> 2 or 3 ->2           #
#                                         #
#    If show === true:                    #
#        -Show Frame 2                    #
#        -#audio 2 listenters             #
#        -anime js timeline               #
#        -setInterval syncs audio         #
#           and animation                 #
#                                         #
#    If show === false:                   #
#        - clear #audio2 listeners        #
#        -clearInterval audio/anime       #
#                                         #
#                                         #
###########################################
*/

const frame2 = (show) => {
  if (show) {
    document.querySelector("#cs2").style.display = "grid";
  }
 else {
  document.querySelector("#cs2").style.display = "none";
}
}

frame1(false);
frame2(true);