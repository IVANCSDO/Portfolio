function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function comprobarVisible(){

    for(i=0;i!=10;i++){

        a=i

        if(isInViewport(document.getElementById('Tit'+i))){
            document.getElementById('Tit'+a+a).className="marcada"
        }else{
            document.getElementById('Tit'+a+a).className=""
        }

    }

}