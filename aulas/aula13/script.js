let banners = ["./js/h.jpg",'./js/h1.png'];

let cont = 0;
function trocaBanner(){
    cont = (cont +1) % 2;
    document.querySelector(".destaque img").src=banners[cont];
}

setInterval(trocaBanner,1000);