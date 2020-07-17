const cookiePhase1 = document.getElementById('stage');

cookiePhase1.addEventListener('click', changePhase2);

function changePhase2() {
	document.getElementById('phase1').src =
		'https://64.media.tumblr.com/75f2ce017804781fa93097ceee54f457/9d323879c90f2a77-4f/s1280x1920/5359b005a46946eee7e45d3027edfaa0869f5079.png';

	const url = "http://fortunecookieapi.herokuapp.com/v1/cookie";

	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			document.getElementById('message').innerText = res[0].fortune.message;
		})
		.catch((err) => {
			console.log('something went wrong...', err);
		});
}

//reset page
// const refresh = document.getElementById('stage');
// refresh.addEventListener('click', resetCookie);
// function resetCookie() {
//  document.getElementById('stage').innerHTML =
//      '<img src="https://64.media.tumblr.com/7407dec05f17dd1ca5fd7f3e3cf04c8e/3c0d2303f0e74362-d7/s1280x1920/7aef52d88c467c82780fabd960afad4116ed9448.png" alt="fortune cookie excitement" height="800" id="phase1"></img>';
// }
