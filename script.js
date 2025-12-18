 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  let gtl1 = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"2% 95%",
        end:"45% 50%",
        scrub:1.5,  //give some value for smother effect
        // markers:true
    }
  })

  gtl1.to(".one #fanta-image",{
    left:"13%",
    top:"130%",
    zIndex:5,
    ease:"power3.out",
  },"name1")

  gtl1.from(".two-one .ice",{
    x: "-200px",
    opacity: 0,
    zIndex: 10,
    duration: 1,
    ease:"power3.out",
  },"name1")
  gtl1.to(".one .orange-slice",{
    left:"64.1%",
    top:"120%",
    height:"80px",
    width:"80px",
    zIndex:7,
    ease: "back.out(1.4)"
   },"name1")

   gtl1.to(".one .orange2",{
    left:"80%",
    top:"173%",
    height:"190px",
    width:"190px",
    ease:"power3.out",
   },"name1")
   gtl1.to(".one .leaf1",{
    left:"79%",
    top:"114%",
    height:"170px",
    width:"170px",
    ease:"power3.out",
   },"name1")
   gtl1.from(".two .two-two p",{
    x:300,
    opacity:0,
    ease:"power3.out",
   },"name1")
   gtl1.from(".two .two-two h1",{
    x:300,
    opacity:0,
    ease:"power3.out",
   },"name1")

   let gtl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"30% 95%",
        end:"50% 50%",
        scrub:1.5,
        // markers:true,
        // pin:true  pin only works in scroll trigger timeline definition
    }
  })

  gtl2.from(".box .sprite",{
    rotate:"-60deg",
    opacity:0,
    x:-200,
    ease: "back.out(1.4)"  // creates bouncy effect
    // overflow: "hidden"  does not work here
  },"name2")
  gtl2.from(".box .pepsi",{
    rotate:"60deg",
    opacity:0,
    x:200,
    ease: "back.out(1.4)"
  },"name2")

  gtl2.from(".three .box .lemon-pepsi",{
    rotate:"60deg",
    opacity:0,
    x:200,
    ease: "back.out(1.2)",
  },"name2")

  gtl2.from(".three .box .lemon-sprite",{
    rotate:"-60deg",
    opacity:0,
    x:-200,
    ease: "back.out(1.2)",
  },"name2")

  gtl2.to(".one #fanta-image",{
    left:"41%",
    top:"220%",
    ease:"power3.out",
  },"name2")
  
  gtl2.to(".one .orange-slice",{
    left:"42%",
    top:"205%",
    width: "250px",
    height: "250px",
    zIndex:3,
    ease:"power3.out",
   },"name2")

 });