var contentContainer = document.getElementById('contentContainer');
var contentFrame = document.getElementById('contentFrame');

var typed = new Typed('.write', {
  strings: ["Developer.", "Soccer Player.", "College Football Lover.", "Amateur Woodworker.", "Expert Netflixer.", "Reed Spivey."],
  typeSpeed: 80, // typing speed
  startDelay: 100,
  backDelay: 800, // pause before backspacing
  backSpeed: 150,
  smartBackspace: true,
  loop: false, // loop on or off (true or false)
  loopCount: false, // number of loops, false = infinite
  callback: function(){ } // call function after typing is done
});


window.sr = ScrollReveal();
sr.reveal("#connect-tag",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".edu",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".coursework",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".prog-lang",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".apps",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".db",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".work-exp",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal("#form-container",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal("#or-container",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".social-grid",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
