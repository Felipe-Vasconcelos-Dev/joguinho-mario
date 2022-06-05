const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const btn = document.querySelector('.btn')
const som = document.querySelector('.audio')
const morrendo = document.querySelector('.morrendo')

btn.addEventListener('click',()=>{
    location.reload()
})

document.addEventListener('keydown',()=>{
    somPulo()

    setTimeout(()=>{

       mario.classList.remove('jump')
       
},500)
mario.classList.add  ('jump')
})
let contador = 0;
const loop =  setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    if(pipePosition <= 0){
        
    }
    if( pipePosition <= 60 && pipePosition > 10){
        if(!mario.classList.contains('jump')){
           somMorrendo()
           pipe.style.animation = 'none'
           contador = 0;
           if(pipe.style.animation = 'none')
           setTimeout(()=>{
               pipe.style.left = '200px'
               let confirme =  confirm('Brayan Perdeu')
                console.log(confirme);
                if(confirme){
               location.reload()
               }else{
            clearInterval(loop)

               }
        },1200) 
           
        }
    }
 
},10)

const somPulo = ()=>{
    som.play()
}
const somMorrendo = ()=>{
    morrendo.play()
}

somPulo()