var contentContainer = document.getElementById('contentContainer');
var contentFrame = document.getElementById('contentFrame');

var typed = new Typed('.write', {
  strings: ["Developer.", "Soccer Player.", "College Football Lover.", "Amateur Woodworker.", "Expert Netflix Watcher.", "Reed Spivey."],
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
sr.reveal("#connect-tag",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".edu",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".coursework",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".prog-lang",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".apps",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".db",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
sr.reveal(".work-exp",{origin:'bottom',duration:400,distance:'20%',easing:'linear',delay:600,scale:1})
