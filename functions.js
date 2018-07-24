var contentContainer = document.getElementById('contentContainer');
var contentFrame = document.getElementById('contentFrame');

var typed = new Typed('.write', {
  strings: ["Developer.", "Texas Aggie.", "Soccer Coach.", "Reed Spivey."],
  typeSpeed: 140, // typing speed
  startDelay: 200,
  backDelay: 200, // pause before backspacing
  backSpeed: 80,
  smartBackspace: true,
  loop: true, // loop on or off (true or false)
  loopCount: false, // number of loops, false = infinite
  callback: function(){ } // call function after typing is done
});


window.sr = ScrollReveal();
sr.reveal(".hero-text-small",{origin:'right',duration:400,distance:'20%',easing:'linear',delay:200,scale:1})
sr.reveal(".hero-text0",{origin:'left',duration:400,distance:'20%',easing:'linear',delay:200,scale:1})
sr.reveal(".hero-text1",{origin:'right',duration:400,distance:'20%',easing:'linear',delay:200,scale:1})
sr.reveal(".hero-text2",{origin:'left',duration:400,distance:'20%',easing:'linear',delay:200,scale:1})
sr.reveal(".hero-text3",{origin:'right',duration:400,distance:'20%',easing:'linear',delay:200,scale:1})
sr.reveal(".edu",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:1200,scale:1})
sr.reveal(".coursework",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:1000,scale:1})
sr.reveal(".prog-lang",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:1000,scale:1})
sr.reveal(".apps",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:800,scale:1})
sr.reveal(".db",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:800,scale:1})
sr.reveal(".work-exp",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:800,scale:1})
