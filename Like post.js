let count =0
setInterval(()=>{
    let heart = document.querySelector('span.glyphsSpriteHeart__outline__24__grey_9')
    let right = document.querySelector('a.HBoOv')
    if(heart){
        heart.click()
        count++
    }
    right.click()
},1000)