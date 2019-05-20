function countdown(){
	var now = new Date();
	var eventDate = new Date(2019, 09, 20); //The date of event

	var currentTime = now.getTime();  //This method gets the present time
	var eventTime = eventDate.getTime();  //Getting the exact time of the event date

	var remTime = eventTime - currentTime;  //Getting the difference between the even time and the current time

	var s = Math.floor(remTime / 1000);   //Getting the exact time in seconds ,minutes without decimals.
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;     //Getting the remains of seconds
	m %= 60;
	s %= 60;
		//if time is less than 10 add 0 to it
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	document.getElementById("days").textContent = d; //repeated code with innertext to support other browsers other than ie.
	document.getElementById("days").innerText = d;


	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;

	setTimeout(countdown, 1000);

}

countdown();