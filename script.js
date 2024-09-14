 const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from(".navbar",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut,
   })
   tl.to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2,
    })

    tl.from(".hours",{
        y:-10,
        opacity:0,
        duration:1,
        ease: Expo.easeInOut,

    })

    tl.from(".hero-footer",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay: -1,
        ease:Expo.easeInOut,  
        stagger:true
    })
}


function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
};

circleMouseFollower();
firstPageAnimation();
