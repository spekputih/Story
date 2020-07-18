
console.log("Hello");
var buttonLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonLength; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var buttonInnerHTML = this.innerHTML;
		swithSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
	});
	
};
document.addEventListener("keypress", function(e){
	console.log(e.key);
	swithSound(e.key);
	buttonAnimation(e.key);
});

function swithSound(condition){
	switch (condition){
			case "w":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
			break;
			case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
			break;
			case "s": 
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
			break;
			case "d":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
			break; 
			case "j": 
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
			break;
			case "k": 
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
			break;
			case "l": 
			var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();
			break;
			default: console.log(this);
		};
}

function buttonAnimation(key) {
	var activeButton = document.querySelector("." + key);
	activeButton.classList.add("pressed");
	setTimeout(function() {
		activeButton.classList.remove("pressed");
	}, 100);

}


// Notes: Javascript Object-
// to create the table-like variable simply create a javascript object in order to simplify the syntax and make more dynamic
/* ex: 
var bellboy1 = {
	name: "Timmy",
	age: 19,
	hasWorkPermit: true,
	languages: ["French","English"]
}


to Understand the callback consept in javascript
example is 
	function anotherTypeEvent(typeOfEvent, callback){
    // waiting to detect event
    var eventObject = {
        eventType: "keypress",
        key: "p",
        durationOfEvent: 2
    }
if(eventObject.eventType === typeOfEvent){
        callback(eventObject);
    }
}

and then, you can callback the function by fullfiling the parameters
needed for the function such as
	--- anotherTypeEvent("keypress", function(event){
		console.log(event)
	});
in calling section, the first parameter is the typeOfEvent that happen
and the second parameter is the callback function that has pre-set parameter of 
eventObject properties
By simply console.log the event in calling section, we can see what's the object is related
to the event and its properties. 

****** timeout function in javascript******
setTimeout(function(){}, time);
*/