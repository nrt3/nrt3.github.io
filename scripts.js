'use strict';
function initGappsMenu() {
	gapps_menu.onwheel = (e) => {
		console.log('delta - ' + e.deltaY);
		if(gapps_menu.scrollTop == 0) {
			if(e.deltaY > 0) {
				gapps_menu.style.overflow = 'overlay';
				gapps_menu_footer.style.display = 'none';
				gapps_menu_sub_container.style.display = 'block';
				gapps_menu_sub_footer.style.display = 'block';
			} else {
				gapps_menu.style.overflow = 'hidden';
				gapps_menu_footer.style.display = 'block';
				gapps_menu_sub_container.style.display = 'none';
				gapps_menu_sub_footer.style.display = 'none';
			}
		}
	}
	gapps_menu.onscroll = (e) => {
		console.log('scroll - ' + gapps_menu.scrollTop);
		if(gapps_menu.scrollTop == 0) {
			gapps_menu.style.overflow = 'hidden';
			gapps_menu_footer.style.display = 'block';
			gapps_menu_sub_container.style.display = 'none';
			gapps_menu_sub_footer.style.display = 'none';
		}
	}
	gapps_menu_footer.onclick = () => {
		gapps_menu.style.overflow = 'overlay';
		gapps_menu_footer.style.display = 'none';
		gapps_menu_sub_container.style.display = 'block';
		gapps_menu_sub_footer.style.display = 'block';
		gapps_menu.scrollTo(0, gapps_menu.scrollHeight);
	}
	gapps_menu_switcher.onclick = () => {
		gapps_menu_triange.style.display = 'block';
		gapps_menu_triange2.style.display = 'block';
		gapps_menu.style.display = 'block';
		gapps_menu_close_overlay.style.display = 'block';
	}
	gapps_menu_close_overlay.onclick = () => {
		gapps_menu_triange.style.display = 'none';
		gapps_menu_triange2.style.display = 'none';
		gapps_menu.style.display = 'none';
		gapps_menu_close_overlay.style.display = 'none';
	}
}
function initTextField() {
	text_field.onfocus = () => {
		search_query_field.style.boxShadow = '0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)';
	};
	text_field.onblur = () => {
		search_query_field.style.boxShadow = '';
	};
}
function initKeyboard() {
	keyboard_switcher.onclick = () => {
		if (keyboard_body.style.display == "" || keyboard_body.style.display == 'none') {
			keyboard_body.style.display = 'block';
		} else {
			keyboard_body.style.display = 'none';
		}
	}
	function keysToDataset(dataset) {
		let keys = document.getElementsByClassName('keyboard_key');
		for (let j = 0; j < keys.length; j++) {
			keys[j].innerText = keys[j].dataset[dataset];
		}
	}
	let shiftKeys = document.getElementsByClassName('keyboard_shift_key');
	for (let i = 0; i < shiftKeys.length; i++) {
		shiftKeys[i].onclick = () => {
			if (keyboard_body.dataset['shift'] == 'false') {
				keyboard_body.dataset['shift'] = 'true';
				if(keyboard_body.dataset['capslock'] == 'false') {
					keysToDataset('shift');
				} else {
					keysToDataset('shiftcaps');
				}
			} else {
				keyboard_body.dataset['shift'] = 'false';
				if(keyboard_body.dataset['capslock'] == 'false') {
					keysToDataset('default');
				} else {
					keysToDataset('caps');
				}
			}
		}
	}
	let capsKeys = document.getElementsByClassName('keyboard_capslock_key');
	for (let i = 0; i < capsKeys.length; i++) {
		capsKeys[i].onclick = () => {
			if (keyboard_body.dataset['capslock'] == 'false') {
				keyboard_body.dataset['capslock'] = 'true';
				if (keyboard_body.dataset['shift'] == 'false') {
					keysToDataset('caps');
				} else {
					keysToDataset('shiftcaps');
				}
			} else {
				keyboard_body.dataset['capslock'] = 'false';
				if(keyboard_body.dataset['shift'] == 'false') {
					keysToDataset('default');
				} else {
					keysToDataset('shift');
				}
			}
		}
	}
	function getCoords() {
		let rect = keyboard_body.getBoundingClientRect();
		return {
			top: rect.top + pageYOffset,
			left: rect.left + pageXOffset
		};
	};
	keyboard_head.ondragstart = (e) => {
		e.preventDefault();
	}
	keyboard_head.onmousedown = (e) => {
		let coords = getCoords();
		let shiftX = e.pageX - coords.left;
		let shiftY = e.pageY - coords.top;
		function moveAt(e) {
			keyboard_body.style.left = e.pageX - shiftX + 'px';
			keyboard_body.style.top = e.pageY - shiftY + 'px';
		}
		document.onmousemove = function(e) {
			moveAt(e);
		};
		keyboard_head.onmouseup = function() {
			document.onmousemove = null;
			keyboard_head.onmouseup = null;
		};
	};
}
window.onload = () => {
	console.log('load');
	initGappsMenu();
	initTextField();
	initKeyboard();
}