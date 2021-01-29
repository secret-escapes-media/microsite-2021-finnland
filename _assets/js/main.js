// general js for the project that wouldn't be a reuseable component


//////////////////////////////////////////////////////////// simple audio player
// checks if player is on page
if($('.js-audio-player').length > 0) {
  // event listener for btn click
  $('.js-audio-player').on('click', function(e){
    e.preventDefault();
    // set variables
    var btnEl = $(this)
    var audioEl = btnEl.next();
    var audioPlayingClass = 'is-playing';
    // check audio playing status
    if(audioEl.hasClass(audioPlayingClass)) {
      // sound playing - change to pause state
      audioEl[0].pause();
      audioEl.removeClass(audioPlayingClass)
      btnEl.text('Abspielen');
    } else {
      // no sound playing - change to pause state
      audioEl[0].play();
      audioEl.addClass(audioPlayingClass)
      btnEl.text('Pause');
    }
    // event listener for audio clip ending
    audioEl[0].addEventListener('ended', function(){
      // sound finished - reset to original state
      btnEl.text('Jetzt reinhören')
      audioEl[0].currentTime = 0;
      audioEl.removeClass(audioPlayingClass)
    })
  })
}


var coll = document.getElementsByClassName("bv-collapsible");
var cssWidthHL = window.innerWidth;

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("bv-active");
    var content = this.nextElementSibling;
    //alert(content);
    if (content.style.height){
      content.style.height = null;

    } else if (window.innerWidth <= 650){
      content.style.height = 50+cssWidthHL+'px';
      console.log(content.style.height);
      content.style.overflow = "auto";
    }else{
      content.style.height = "580px";
      content.style.overflow = "auto";
    }
  });
}

// Make legend acceesible
var i;
var j;
var index_highest = 0;

var pins = ['one', 'two', 'three','four'];
var coll = document.getElementsByClassName("bv-toggle");
var coll1 = document.getElementsByClassName("marker--map-one");
var coll2 = document.getElementsByClassName("marker--map-two");
var coll3 = document.getElementsByClassName("marker--map-three");
var coll4 = document.getElementsByClassName("marker--map-four");
//console.log(coll1);
  //console.log(elemOne);
document.getElementById('bv-pin1').addEventListener("click", function(){

  var mapOne1 = document.getElementById("map-one-1");
  console.log(mapOne1);

for (i = 1; i <= coll1.length; i++) {
	//var zindex = document.getElementById('kulinarik'+i).style.getPropertyValue("z-index");
  var elemOne = document.getElementById('map-one'+i);


  if (elemOne.style.display === "none") {
      elemOne.style.display = "block";
			this.classList.add('bv-toggle-active');
    //  this.firstChild.style.opacity = "1";


    } else {
      elemOne.style.display = "none";
			this.classList.remove('bv-toggle-active');
    //  this.firstChild.style.opacity = "0.4";
    }
  }
});

document.getElementById('bv-pin2').addEventListener("click", function(){

for (i = 1; i <= coll2.length; i++) {

  var elemTwo = document.getElementById('map-two'+i);

  if (elemTwo.style.display === "none") {
      elemTwo.style.display = "block";
			this.classList.add('bv-toggle-active');
    //  this.firstChild.style.opacity = "0.4";

    } else {
      elemTwo.style.display = "none";
			this.classList.remove('bv-toggle-active');
    //  this.firstChild.style.opacity = "1";
    }
  }
});

document.getElementById('bv-pin3').addEventListener("click", function(){

for (i = 1; i <= coll3.length; i++) {

  var elemThree = document.getElementById('map-three'+i);


  if (elemThree.style.display === "none") {
      elemThree.style.display = "block";
			this.classList.add('bv-toggle-active');
    //  this.firstChild.style.opacity = "0.4";

    } else {
      elemThree.style.display = "none";
			this.classList.remove('bv-toggle-active');
    //  this.firstChild.style.opacity = "1";

    }
  }
});

document.getElementById('bv-pin4').addEventListener("click", function(){

for (i = 1; i <= coll4.length; i++) {

  var elemFour = document.getElementById('map-four'+i);


  if (elemFour.style.display === "none") {
      elemFour.style.display = "block";
			this.classList.add('bv-toggle-active');
    //  this.firstChild.style.opacity = "1";

    } else {
      elemFour.style.display = "none";
			this.classList.remove('bv-toggle-active');
    //  this.firstChild.style.opacity = "0.4";

    }
  }
});
