function abrir(){
    let menu = document.getElementById('menu-escondido');
    if(menu.style.width === "0px"){

        menu.style.width = "200px"
        
    }else{
        menu.style.width = '0px'
    }
}