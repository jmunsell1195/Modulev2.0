const start = Date.now();


document.body.style.minWidth = String(0.99*w);
document.body.style.minHeight = String(0.8*h);

const strt = (show) => {
    if(show){
        document.getElementById("start").style.display = "block"
    } else {
        document.getElementById("start").style.display = "none"
    }
}

const frame0 = (show) => {
    const frame = document.getElementById("cs0")
    if(show){
        frame.style.display = "grid"

        let tl = anime.timeline({
            easing : 'linear',
            autoplay: false
        })
        tl.add({
            targets: "#vec1",
            opacity: 1
        },8000)
        tl.add({
            targets: "#vec3",
            opacity: 0
        },8000)
        tl.add({
            targets: "#vec1",
            opacity: 0
        },30000)
        tl.add({
            targets: "#vec2",
            opacity: 1
        },30000)
        tl.add({
            targets: "#vec2",
            opacity: 0
        },69000)
        tl.add({
            targets: "#N2",
            opacity: 1
        },69500)
        tl.add({
            targets: "#cueA,#motion-head",
            opacity: 1
        },72000)
        tl.add({
            targets: "#cueF,#force-head",
            opacity: 1
        },74000)
        tl.add({
            targets: "#cueF,#cueA,#N2,#force-head,#motion-head",
            opacity: 0
        },102000)
        tl.add({
            targets: "#Fnetx,#equals,#max",
            opacity: 1
        },103000)
        tl.add({
            targets: "#Fnety,#equals2,#may",
            opacity: 1
        },112000)
        tl.add({
            targets: "#Fnetx",
            opacity: 0
        },132000)
        tl.add({
            targets: "#sumx",
            opacity: 1
        },134000)
        tl.add({
            targets: "#Fnety",
            opacity: 0
        },139000)
        tl.add({
            targets: "#sumy",
            opacity: 1
        },140000)
        tl.add({
            targets: "#sumx,#sumy,#equals,#equals2,#max,#may",
            opacity: 0
        },157000)
        tl.add({
            targets: "#prblm-stmnt",
            opacity: 1
        },160000)
        tl.add({
            targets: "#xax",
            opacity: 1
        },186000)
        tl.add({
            targets: "#yax",
            opacity: 1
        },193000)
        tl.add({
            targets: "#ft-cue1,#ft-cue2",
            opacity: 1
        },208000)
        tl.add({
            targets: "#F,#F-lab,#F-lab11",
            opacity: 1
        },209000)
        tl.add({
            targets: "#fg-cue1",
            opacity: 1
        },230000)
        tl.add({
            targets: "#fg-vec,#fg-lab,#fg-lab11",
            opacity: 1
        },232000)
        tl.add({
            targets: "#fk-cue1",
            opacity: 1
        },237000)
        tl.add({
            targets: "#Ffk-vec,#Ffk-lab,#Ffk-lab11",
            opacity: 1
        },251000)
        tl.add({
            targets: "#fn-lab,#fn-vec,#fn-lab11",
            opacity: 1
        },258000)
        tl.add({
            targets: "#prblm-stmnt,#ft-cue1,#ft-cue2,#fg-cue1,#fk-cue1",
            opacity: 0
        },270000)
        tl.add({
            targets: "#Fnet,#ma",
            opacity: 1
        },271000)
        tl.add({
            targets: "#Fnet",
            opacity: 0
        },274000)
        tl.add({
            targets: "#F-lab11",
            translateX: -27.5*size,
            translateY: -6*size
        },275000)
        tl.add({
            targets: "#plus1",
            opacity: 1
        },275500)
        tl.add({
            targets: "#fn-lab11",
            translateX: -12.3*size,
            translateY: -9.05*size
        },276000)
        tl.add({
            targets: "#plus2",
            opacity: 1
        },276500)
        tl.add({
            targets: "#Ffk-lab11",
            translateX: -4*size,
            translateY:-14.5*size
        },277000)
        tl.add({
            targets: "#plus3",
            opacity: 1
        },277500)
        tl.add({
            targets: "#fg-lab11",
            translateX: -1.5*size,
            translateY: -17.2*size
        },278000)
        tl.add({
            targets: "#fn-lab11,#Ffk-lab11,#fg-lab11,#F-lab11,#ma,#plus1,#plus2,#plus3",
            opacity: 0
        },284000)
        tl.add({
            targets: "#Fnetx2,#equals11,#max1",
            opacity: 1
        },286000)
        tl.add({
            targets: "#Fnety2,#equals222,#may1",
            opacity: 1
        },292000)
        tl.add({
            targets: "#yax,#fn-vec,#fn-lab,#Fg-vec,#Fg-lab",
            opacity:0
        },306000)
        tl.add({
            targets: "#xdash,#fx-vec2,#Fx,#Fx2",
            opacity: 1
        },310000)
        tl.add({
            targets: "#F,#F-lab,#xdash,#Ffk-vec,#Ffk-lab",
            opacity: 0
        },312000)
        tl.add({
            targets: "#Ffk-vec2,#Ffk-lab2,#Ffk-lab3",
            opacity:1
        },312000)
        tl.add({
            targets: "#Fnetx2,#max1",
            opacity: 0
        },314000)
        tl.add({
            targets: "#xdash2,#xdash3,#xdash4",
            opacity: 1
        },325500)
        tl.add({
            targets: "#Fx2",
            translateX: -31*size,
            translateY: -15.5*size
        },316000)
        tl.add({
            targets: "#Ffk-lab3",
            translateX: -15.5*size,
            translateY: -14.8*size
        },325000)
        tl.add({
            targets: "#minus",
            opacity: 1
        },324500)
        tl.add({
            targets: "#Ffk-vec2",
            translateX: 6.75*size,
            translateY: -2*size
        },330000)
        tl.add({
            targets: "#Ffk-lab2",
            translateX: 11*size,
            translateY: -6*size
        },330000)
        tl.add({
            targets: "#max-vec,#max-lab,#max-lab2",
            opacity: 1
        },339000)
        tl.add({
            targets: "#max-lab2",
            translateX:-14.5*size,
            translateY:-8.8*size
        },347000)
        tl.add({
            targets: "#xax,#xdash2,#xdash3,#xdash4,#max2,#Fx,#Ffk-vec2,#max-lab,#max-vec,#Ffk-lab2,#Fx-vec2",
            opacity: 0
        },369000)
        tl.add({
            targets: "#yax,#fn-vec2,#fy-vec,#Fg-vec2,#Fy-vec2,#Fy,#Fy22,#Fg-lab2,#Fg-lab3,#fn-lab2,#fn-lab3",
            opacity: 1
        },369500)
        tl.add({
            targets: "#Fnety2,#may1",
            opacity: 0
        },369500)
        tl.add({
            targets: "#ydash2,#ydash3,#ydash4",
            opacity: 1
        },369500)
        tl.add({
            targets: "#Fy-vec2",
            translateX: -0.75*size,
            translateY: -2.75*size
        },373000)
        tl.add({
            targets: "#Fy22,#Fy",
            translateY: -1.5*size
        },373000)
        tl.add({
            targets: "#fn-lab2,#fn-lab3",
            translateX: 4.5*size,
            translateY: 2.6*size
        },373000)
        tl.add({
            targets: "#fn-lab3",
            translateX: 5*size,
            translateY: -9*size
        },382000)
        tl.add({
            targets: "#plus4",
            opacity: 1
        },382000)
        tl.add({
            targets: "#Fy22",
            translateX: 5.5*size,
            translateY: -9*size
        },383000)
        tl.add({
            targets: "#Fg-vec2",
            translateX: -2*size,
            translateY: - 8*size
        },386000)
        tl.add({
            targets: "#Fg-lab2,#Fg-lab3",
            translateX: - 2.5*size,
            translateY: -10*size
        },386000)

        tl.add({
            targets: "#minus2",
            opacity: 1
        },392500)
        tl.add({
            targets: "#Fg-lab3",
            translateX: 15.6*size,
            translateY: -17.5*size
        },393000)
        tl.add({
            targets: "#zero",
            opacity: 1
        },411000)

        let x = setInterval(function(){
            const audio = document.querySelector("#audio")
            let place = audio.currentTime;
            tl.seek(1000*place)
        },50)





    } else {
        frame.style.display = "none"
    }
}

const frame1 = show => {
    let frame = document.querySelector("#cs1")
    if(show){
        frame.style.display = 'grid';

        let tl = anime.timeline({
            autoplay: true,
            easing: 'linear'
        })

        tl.add({
            targets: "#diagram1",
            opacity: 0
        })
    } else {
        frame.style.display = 'none';
    }
}

document.getElementById("start-btn").addEventListener('click',function(){
    strt(false);
    frame0(true);
})

document.getElementById("btn1").addEventListener('click',function(){
    frame0(false);
    frame1(true);
})

frame0(false);
frame1(false);
