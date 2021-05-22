window.addEventListener('load',()=>{

    //Random images
    
    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
      }
   
      const image = document.querySelectorAll('.picture');
      image.forEach((el) => {
        let num1 = getRandomInt(1000,1300);
        let num2 = getRandomInt(700,1000);
        const urlEl = `https://source.unsplash.com/user/erondu/${num1}x${num2}`;
        el.style.backgroundImage = `url("${urlEl}")`;
    });


    //Video modal
    const video = {
        play0 : "https://www.youtube.com/embed/V1RPi2MYptM",
        play1 : "https://www.youtube.com/embed/BBjjTeAl9bs",
        play2 : "https://www.youtube.com/embed/LepMmRUdlxo",
        play3 : "https://www.youtube.com/embed/OuHETYCIrPU  ",
        play4 : "https://www.youtube.com/embed/MTiRmTi41TU",
        play5 : "https://www.youtube.com/embed/VqQv5g1WslA",
     };

     //Select objects in the dom
    const play = document.querySelectorAll('.play');
    const modal = document.querySelector('.modalNone');
    const videoFram = document.querySelector('iframe');

    play.forEach((element,index) => {
        element.addEventListener('click', function(){
          
            try {
            //see modal
            let videoName = video[`play${index}`];
            videoFram.setAttribute('src',`${videoName}`);
            modal.className = "modalVisible";
                
            } catch (e) {
                // mensagge error
                console.warn('Problems in the modal script', e);
            }
            
        })
    });

    //close modal
     const btnCerrar = document.getElementById('close')

     btnCerrar.addEventListener('click', function(){ 
         modal.className = "modalNone";//class change
         videoFram.setAttribute('src',' '); //empty video
     })
         
})