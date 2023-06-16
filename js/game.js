let contex=document.getElementById('gameCanvas').getContext('2d')
contex.canvas.width = 300
contex.canvas.height = 700

let gravedad=1.5}
let fps=60

let bird={
    x:150,
    y:100,
    w:50,
    h:50
}
setInterval(loop, 1000/fps)/*Sirve para ejecutrar la función - 60 CUADRos POR SEGUNDO */
function loop(){
    contex.clearRect(0,0,300,700)/*Posición del objeto con respecto a las medidas del canvas*/ /* Crea un nuevo cuadro y limpia el antterior */
    contex.fillStyle = 'rgba(100,45,300,1)'
    contex.fillRect(bird.x,bird.y,bird.w,bird.h)

    bird.y+=gravedad
}

//CONTROLES

function press(){
    bird.y-=10

}

window.addEventListener('keydown',press)