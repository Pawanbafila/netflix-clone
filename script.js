function foc() {
    var inp = document.querySelector(".input-groups label");
    inp.style.top = '-20px'
    inp.style.transition = 'all  0.5s ease-in'
    inp.style.fontSize = '13px'
}
function blurFunction() {
    var inp = document.querySelector(".input-groups label");
   inp.style.top = ''
   inp.style.fontSize = '12px'
}

function run(){
    var btn = document.querySelector(".btn-div i");
    btn.style.animation = 'left-right 2s ease-in infinite'

}
function stop(){
    var btn = document.querySelector(".btn-div i");
    btn.style.animation = ''

}