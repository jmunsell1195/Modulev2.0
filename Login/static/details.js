const hide1 = () => {
    $("#main1").css("display","none");
};

const show1 = () => {
    $("#main1").css("display","grid");
};

const hide2 = () => {
    $("#main2").css("display","none");
};

const show2 = () => {
    $("#main2").css("display","grid")
};

$(document).ready(function(){
    
    hide2();
})