$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat andrew.human<br/>" + 
      "><span class='andrew'>$</span> skills: Nodejs, typescript, python, react, arduino. <br/> ^100" +
      "><span class='andrew'>$</span> job: Junior Software-Developer <a href='https://auraside.com'>AuraSide, Inc.</a> ^100" +
      "><span class='andrew'>$</span> hobbies: Hockey, Coding, Baseball. <b> ^300" +
      "><span class='andrew'>$</span> alias: Flop <br/>" +
      "><span class='andrew'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/andrewnijmeh/'>github</a> <a href='http://in.linkedin.com/in/andrewnijmeh/'>linkedin</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});