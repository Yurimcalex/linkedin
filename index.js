let profileMenu = document.getElementById('profileMenu');
let settingsMenu = document.getElementById('settingsMenu');
let colorsSlider = document.querySelector('#colorsInvertor .slider');

// open/close profile menu when clicking on profile img
document.querySelector('.nav-profile-img').addEventListener('click', () => {
	if (!settingsMenu.classList.contains('drop-down-eff-open')) {
		toggleMenu();
	}
});

// close profile menu and open settings menu
document.getElementById('settingsLink').addEventListener('click', () => {
	toggleMenu();
	toggleSettingsMenu();
});

// close settings menu
document.querySelector('.settings-menu span').addEventListener('click', () => {
	settingsMenu.classList.toggle('drop-down-eff-open');
});

// invert theme's colors when click correspond setting
document.getElementById('colorsInvertor').addEventListener('click', () => {
	toggleSlider(colorsSlider);
	invertTheme();
	//toggleSettingsMenu();
});



// toggle settings soider
function toggleSlider(slider) {
	slider.classList.toggle('enable');
}

// open/close profile menu 
function toggleMenu() {
	profileMenu.classList.toggle('drop-down-eff-open');
}

// open/close settings menu
function toggleSettingsMenu() {
	settingsMenu.classList.toggle('drop-down-eff-open');
}



