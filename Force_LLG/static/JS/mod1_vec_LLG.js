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
#        -Add event listeners             #
#         to buttons to display           #
#         content on mouse-enter          #
#                                         #
#    If show === false:                   #
#        - Frame 1 hidden                 #
#        - Clear listeners                #
#                                         #
#                                         #
###########################################
*/

const frame1 = (show) => {

  const scalars = document.querySelector("#scalars");
  const dist = document.querySelector("#dist");
  const disp = document.querySelector("#disp");

  const sclrStmnt = document.querySelector("#scalar-stmnt");
  const thermo = document.querySelector("#thermo");
  const watch = document.querySelector("#watch");
  const areaStmnt = document.querySelector("#area-stmnt");
  const areaPic = document.querySelector("#area-pic");
  const vecStmnt = document.querySelector("#vec-stmnt");
  const vecPic = document.querySelector("#vec-pic");
  const btn3 = document.querySelector("#btn3");
  const btn2 = document.querySelector("#btn2");

  if (show){
    document.querySelector("#cs1").style.display = "grid";

    let box1 = false;
    let box2 = false;
    let box3 = false;


    scalars.addEventListener("mouseenter",() => {
      sclrStmnt.style.opacity = 1;
      thermo.style.opacity = 1;
      watch.style.opacity = 1;
      scalars.style.backgroundColor = "#6c63ff";
      dist.style.opacity = 0.4;
      disp.style.opacity = 0.4;
      box1 = true;
    })
    scalars.addEventListener("mouseleave", () => {
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
    dist.addEventListener("mouseleave",() => {
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
    disp.addEventListener("mouseleave",() => {
      vecStmnt.style.opacity =0;
      vecPic.style.opacity = 0;
      scalars.style.opacity =1;
      dist.style.opacity = 1;
      disp.style.backgroundColor = "#8c979d";
    })

    btn2.addEventListener("click",()=>{
      frame1(false);
      frame0(true);
    })

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

  const vecButt = document.querySelector("#vectorsbutt");
  const meaning = document.querySelector("#meaning");
  const FxButt = document.querySelector("#fx-butt");
  const FyButt = document.querySelector("#fy-butt");

  const vec = document.querySelector("#vector-main");
  const vecStmnt = document.querySelector("#vectorStmnt");
  const lightX = document.querySelector("#lightx");
  const lightY = document.querySelector("#lighty");
  const xComp = document.querySelector("#xcomp");
  const yComp = document.querySelector("#ycomp"); 
  const compStmnt = document.querySelector("#compStmnt");
  const xCompStmnt = document.querySelector("#x-compStmnt")
  const yCompStmnt = document.querySelector("#y-compStmnt")
  const tri = document.querySelector("#tri"); 
  const eqn1 = document.querySelector("#eqn1"); 
  const eqn2 = document.querySelector("#eqn2"); 
  const eqn3 = document.querySelector("#eqn3"); 
  const eqn4 = document.querySelector("#eqn4"); 
  const eqn5 = document.querySelector("#eqn5"); 
  const eqn6 = document.querySelector("#eqn6");

  vec.style.opacity = 1;
  vecStmnt.style.opacity = 1;
  meaning.style.opacity = 0.4;
  vecButt.style.backgroundColor = "#6c63ff";
  FxButt.style.opacity = 0.4;
  FyButt.style.opacity = 0.4;

  if (show) {
    document.querySelector("#cs2").style.display = "grid";

    const mean = (show) => {
      if (show) {
        document.querySelector("#cs2 .ctr").style.backgroundColor = "#535c66";
        lightX.style.opacity = 1;
        lightY.style.opacity = 1;
        xComp.style.opacity = 1;
        yComp.style.opacity = 1;
        compStmnt.style.opacity = 1;
        FyButt.style.opacity = 0.4;
        FxButt.style.opacity = 0.4;
        meaning.style.backgroundColor = "#6c63ff"
        vecButt.style.opacity = 0.4;
      } else {
        document.querySelector("#cs2 .ctr").style.backgroundColor = "#f5f5f5";
        lightX.style.opacity = 0;
        lightY.style.opacity = 0;
        xComp.style.opacity = 0;
        yComp.style.opacity = 0;
        compStmnt.style.opacity = 0;
        FyButt.style.opacity = 1;
        FxButt.style.opacity = 1;
        meaning.style.backgroundColor = "#8c979d";
        vecButt.style.opacity = 1;
      }
    }

    const Fy = (show) => {
      if(show) {
        tri.style.opacity = 1;
        eqn1.style.opacity = 1;
        eqn2.style.opacity = 1;
        eqn3.style.opacity = 1;
        yCompStmnt.style.opacity = 1;
        FyButt.style.backgroundColor = "#6c63ff"
        FxButt.style.style.opacity = 0.4;
        meaning.style.opacity = 0.4;
        vecButt.style.opacity = 0.4;
      } else {
        tri.style.opacity = 0;
        eqn1.style.opacity = 0;
        eqn2.style.opacity = 0;
        eqn3.style.opacity = 0;
        yCompStmnt.style.opacity = 0;
        FyButt.style.backgroundColor = "#8c979d";
        FxButt.style.style.opacity = 1;
        meaning.style.opacity = 1;
        vecButt.style.opacity = 1;
      }
    }
    const Fx = (show) => {
      if (show) {
        tri.style.opacity = 1;
        eqn4.style.opacity = 1;
        eqn5.style.opacity = 1;
        eqn6.style.opacity = 1;
        xCompStmnt.style.opacity = 1;
        FyButt.style.opacity = 0.4; 
        FxButt.style.style.backgroundColor = "#6c63ff"
        meaning.style.opacity = 0.4;
        vecButt.style.opacity = 0.4;
      } else {
        tri.style.opacity = 0;
        eqn4.style.opacity = 0;
        eqn5.style.opacity = 0;
        eqn6.style.opacity = 0;
        xCompStmnt.style.opacity = 0;
        FyButt.style.opacity = 1; 
        FxButt.style.style.backgroundColor = "#8c979d"
        meaning.style.opacity = 0.4;
        vecButt.style.opacity = 0.4;
      }
    }

    }

    vecButt.addEventListener("mouseenter",() => {

    })
    vecButt.addEventListener("mouseleave",() => {
      vec.style.opacity = 0;
      vecStmnt.style.opacity = 0;
      meaning.style.opacity = 1;
      FxButt.style.opacity = 1;
      FyButt.style.opacity = 1;
      vecButt.style.backgroundColor = "#535c66";
    })

    meaning.addEventListener("mouseenter",mean(true))
    meaning.addEventListener("mouseleave",mean(false))

    FxButt.addEventListener("mouseover",Fx(true))
    FxButt.addEventListener("mouseleave",Fx(false))

    FyButt.addEventListener("mouseenter",Fy(true))
    FyButt.addEventListener("mouseleave",Fy(false))


    }
  // document.querySelector("#cs2").style.display = "none";

  // vecButt.removeEventListener("mouseenter",vbutt(true))
  // vecButt.removeEventListener("mouseleave",vbutt(false))

  // meaning.removeEventListener("mouseenter",mean(true))
  // meaning.removeEventListener("mouseleave",mean(false))

  // FxButt.removeEventListener("mouseover",Fx(true))
  // FxButt.removeEventListener("mouseleave",Fx(false))

  // FyButt.removeEventListener("mouseenter",Fy(true))
  // FyButt.removeEventListener("mouseleave",Fy(false))

// const frame3 = (show) => {
//   if (show) {

//   } else {

//   }
// }

frame0(true);
frame2(false);