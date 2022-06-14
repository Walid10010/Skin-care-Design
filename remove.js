
//let x = document.querySelector(".box");
//x.removeChild(x.getElementsByClassName('box-1')[0]);
//console.log(x)


const tlH2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box",
      scrub: true,
      start: 'top',
      end: 'bottom',
     
     
      markers: { startColor: "green", endColor: "blue" },

      
    },
  });
  tlH2.to('.box-1', {yPercent:-60});
tlH2.to('.inner', {yPercent:-200}, '<');
tlH2.to('.box-3', {yPercent:-100}, '<');
tlH2.to('.box-4', {yPercent:-150}, '<');
tlH2.to('.box-6', {yPercent:-200}, '<');
tlH2.to('.box-8', {yPercent:-150}, '<');
tlH2.to('.box-8', {yPercent:-250}, '<');
tlH2.to('.box-5', {yPercent:-50}, '<');










var container1 = document.querySelector('#box11');
container1.children[0].getBoundingClientRect().x
console.log(container1.children[1])


//pageScroll();
var cond = false


/*
const observer = new window.IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    cond = true
    let firstChild = container1.children[0]
    container1.removeChild(firstChild)
    observer.unobserve(container1.children[container1.children.length -1])
    container1.appendChild(firstChild)
    observer.observe(firstChild)
    return
  }
  if (cond){
    var lastChild =  container1.children[container1.children.length -1]
    container1.removeChild(lastChild)
    observer.unobserve(lastChild)
    container1.prepend(lastChild)
    lastChild =  container1.children[container1.children.length -1]
    observer.observe(lastChild)
  }



  console.log('ss')
}, {
  root: null,
  threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
})
let el = container1.children[container1.children.length -1];
observer.observe(el);

*/





function t(e){

  console.log('enter')
}

function a(e){
  if (e.deltaX < 0) {
    

    if (container1.children[0].getBoundingClientRect().width +  container1.children[0].getBoundingClientRect().x + e.deltaX > 100) {
     
      var lastChild =  container1.children[container1.children.length -1]
     
        container1.prepend(lastChild)
        gsap.set('#box11', {x:'-='+ lastChild.getBoundingClientRect().width })
      
      
     
      
    

  }  
}else{

  let second = container1.children[1]
  if (second.getBoundingClientRect().x + e.deltaX  < 0 ) {
     let firstChild = container1.children[0]
     container1.removeChild(firstChild)
     container1.append(firstChild)
     gsap.set('#box11', {x:'+='+ second.getBoundingClientRect().width })
  }

}
}

window.addEventListener("wheel", (e)  => {
  var container1 = document.querySelector('#box11');

  e.preventDefault();

  console.log( e.deltaX )
  


  /*
  else{

    let second = container1.children[1]
    if (second.getBoundingClientRect().x + e.deltaX  < 0 ) {
       let firstChild = container1.children[0]
       container1.removeChild(firstChild)
       container1.append(firstChild)
    }
    



  }
*/
  gsap.to(window, {duration: 0.5, scrollTo: {y: '+=' + e.deltaY * 1.2}});
  gsap.to('#box11', {duration: 0.5,  x:'-=' + e.deltaX *1.2}, {onComplete:a(e)}  ,{onCompleteParams:[e]});
  var container1 = document.querySelector('#box11');
  let l = (container1.children.length);
  //console.log(l)
  //console.log(container1.children[l-2].getBoundingClientRect().x)
  console.log('first', container1.children[0].className)



}, {passive:false})

window.addEventListener("click", () => {
  var lastChild =  container1.children[container1.children.length -1]
     
    container1.prepend(lastChild)
    gsap.set('#box11', {x:'-='+ lastChild.getBoundingClientRect().width })
    console.log(this.scrollY);
  });