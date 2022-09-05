let questionMinutes = 0.2;

let totalSeconds = questionMinutes * 60;

let countDownDate = new Date((new Date()).getTime() + questionMinutes*60000).getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  remainingSeconds = minutes*60 + seconds;

  console.log((1-(remainingSeconds/totalSeconds)) * 100);

  document.querySelector(".time-bar .remaining").style.width = `${remainingSeconds/totalSeconds * 100}%`;
  document.querySelector(".game").style.width = `${100 - ((1-(remainingSeconds/totalSeconds)) * 100)/2}%`;
  document.querySelector(".img").style.width = `${((1-(remainingSeconds/totalSeconds)) * 100)/2}%`

  strSeconds = seconds < 10 ? '0' + seconds : seconds;
  strMinutes = minutes < 10 ? '0' + minutes : minutes;

  
  document.querySelector("#remaining-time-in-minutes").innerHTML = `${strMinutes}:${strSeconds}`;

  // If the count down is finished, write some text
  if (distance < 0) {

    clearInterval(x);

    document.querySelector("#remaining-time-in-minutes").innerHTML = "00:00"
	document.querySelector(".time-bar .remaining").style.width = "0%";
	document.querySelector(".game").style.width = "50%";
	document.querySelector(".img").style.width = "50%";


  }
}, 100);

function start(){
	setTimeout('nextScene()',12000);	
}


window.addEventListener("load",start())


function nextScene(){
    window.location.href = "../8-session-end/index.html"
}