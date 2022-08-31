
//NOTE: you have to sytle the element with {position:absolute;top:0;left:0;resize:both;overflow:auto;}


const dragNRes = (el) =>{
    el.addEventListener('mousedown',(e)=>{
        //this condicional is to avoid dragging element when resizing the element
        if(!(e.clientX - Number(el.style.left.slice(0,-2)) <el.clientWidth - 20) && !(e.clientY - Number(el.style.top.slice(0,-2)) < el.clientHeight - 20)) return
        el.addEventListener('mousemove',function drag(e){
            document.getElementById('pepe').textContent = `${el.clientWidth} ${el.clientHeight}`
            el.style.top = `${e.clientY - el.clientHeight}px`
            el.style.left = `${e.clientX - el.clientWidth/2}px`
            el.addEventListener('mouseup',()=>el.removeEventListener('mousemove',drag))
        })
    })

    el.addEventListener('touchmove',function drag(e){
            //this condicional is to avoid dragging element when resizing the element
            if(!(e.touches[0].clientX - Number(el.style.left.slice(0,-2)) <el.clientWidth - 20) && !(e.touches[0].clientY - Number(el.style.top.slice(0,-2)) < el.clientHeight - 20)) return
            document.getElementById('pepe').textContent = `${el.clientWidth} ${el.clientHeight}`
            el.style.top = `${e.touches[0].clientY - el.clientHeight/2}px`
            el.style.left = `${e.touches[0].clientX - el.clientWidth/2}px`
            
    })
}
