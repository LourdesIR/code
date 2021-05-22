window.addEventListener('load',()=>{

    // const image = document.querySelectorAll('.picture');

    // image.forEach((el) => {
    //     let num1 = 10000*Math.random()
    //     let num2 = 7000*Math.random()
    //     const urlEl = `https://source.unsplash.com/user/erondu/${num1}x${num2}`
    //     el.style.backgroundImage = `url("${urlEl}")`;
    // });

    const video = {
        play0 : "https://www.youtube.com/embed/V1RPi2MYptM",
        play1 : "https://www.youtube.com/embed/BBjjTeAl9bs",
        play2 : "https://www.youtube.com/embed/LepMmRUdlxo",
        play3 : "https://www.youtube.com/embed/OuHETYCIrPU  ",
        play4 : "https://www.youtube.com/embed/MTiRmTi41TU",
        play5 : "https://www.youtube.com/embed/VqQv5g1WslA",
     };

    const play = document.querySelectorAll('.play');
    const modal = document.querySelector('.modalNone');
    const videoFram = document.querySelector('iframe')

    play.forEach((element,index) => {
        element.addEventListener('click', function(){
          
            try {
            //see modal
            let videoName = video[`play${index}`]
            videoFram.setAttribute('src',`${videoName}`)
            modal.className = "modalVisible";//class change
                
            } catch (e) {
                console.warn('Problem in the modal', e)
            }
            
        })
    });

    //close modal
     const btnCerrar = document.getElementById('close')

     btnCerrar.addEventListener('click', function(){ 
         modal.className = "modalNone";//class change

     })
     
    

})