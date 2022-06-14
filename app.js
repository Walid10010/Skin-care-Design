
const textTimeline = gsap.timeline()

let time = 1.5;
textTimeline.fromTo('.top-left p', {x:100, opacity:0}, {x:0, opacity:1, duration:time});
textTimeline.fromTo('.top-center p', {y:-100, opacity:0}, {y:0, opacity:1, duration:time}, '<');
textTimeline.fromTo('.top-right p', {x:-100, opacity:0}, {x:0, opacity:1, duration:time }, '<');
textTimeline.fromTo('.bottom-right p', {x:-100, opacity:0}, {x:0, opacity:1, duration:time }, '<');
textTimeline.fromTo('.bottom-center p', {y:100, opacity:0}, {y:0, opacity:1, duration:time}, '<');
textTimeline.fromTo('.bottom-left p', {x:-100, opacity:0}, {x:0, opacity:1, duration:time }, '<');



const tlH = gsap.timeline({
    scrollTrigger: {
      trigger: ".top-img-div",
     
      scrub: true,
      start: "top 25%",
     

      
    },
  });


tlH.fromTo('.top-img-div img', {transform:''}, {transform:'translate(0%,25%) scale(2.5)'});


const el = document.querySelector('.before-div')
const observer = new window.IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    textTimeline.restart()
    return
  }
}, {
  root: null,
  threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
})

observer.observe(el);








const tlH2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".para-div",
      scrub: true,
     
     
      markers: { startColor: "red", endColor: "red" },

      
    },
  });

  tlH2.fromTo('.para-left-top-side-img', {yPercent:0}, {yPercent:-100})


  gsap.set(".right-silder", {x:0, xPercent:0, opacity:1});



  const silder = gsap.timeline()

  let x = silder.to(".right-silder",  {
    xPercent:-100,
    x:0,
    boxSizing: 'content-box',
   
    ease: "linear",
    scrollTrigger: {
      trigger: ".right-silder",
      start:'top',
      
      end: () => innerWidth * 2,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      //anticipatePin: 2,
      onToggle: scrollTrigger => {
        scrollTrigger.refresh()
        console.log('refresh')
      },
      markers: { startColor: "red", endColor: "red" },
    }
  });





const el2 = document.querySelector('.img-text')
const observer2 = new window.IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    textTimeline.restart()
    return
  }
}, {
  root: null,
  threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
})

observer2.observe(el2);

var click = false;

const tlshrip = gsap.timeline({pause:true})
tlshrip.pause();
tlshrip.fromTo('.left-side', {width:'0%'}, {width:"20%", duration:2});
tlshrip.fromTo('.right-side', {width:'100%'}, {width:"80%", duration:2}, '<');
tlshrip.fromTo('.right-silder', {width:'300%', left:'0%'}, {width:"300%", left:'20vw', duration:2}, '<');
tlshrip.to('header', {backgroundColor:'black', color:'white', duration:2}, '<');
tlshrip.to('body', {backgroundColor:'black', duration:2}, '<');

var element = document.querySelector(".menu"); //grab the element
element.onclick = function() { //asign a function
 
  if (!click){
     click = true
    tlshrip.play()
    tlshrip.refresh()
  }else{
    console.log('log')
    click = false
    tlshrip.reverse()

  }
}


const lasttime = gsap.timeline({pause:true})
lasttime.pause()
lasttime.fromTo('.img-text', {opacity:0}, {opacity:1});
var seen = false;
  const el3 = document.querySelector('.listen-div')
  const observer3 = new window.IntersectionObserver(([entry]) => {
   console.log(entry.boundingClientRect.left);
   if (entry.boundingClientRect.left < 0){
       if (seen){
          //pass
       }else{
         lasttime.play();
         seen = true;
       }

   }else{
      if (seen){
        lasttime.reverse();
        seen = false;
      }else{
        //nix
      }

   }
    if (entry.isIntersecting) {
     

     
      console.log('j')
      
      return
    } 
    
    console.log('play')


    //lasttime.reverse()
  }, {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
  })
  
  observer3.observe(el3);

