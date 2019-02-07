window.addEventListener("keydown",function (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const targetKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	targetKey.classList.add("playing");
});

function removeTransition(e){
	if(e.propertyName !== "transform") return;
	e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(elm => elm.addEventListener("transitionend", removeTransition));
