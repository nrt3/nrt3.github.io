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
window.onload = () => {
	console.log('load');
	initGappsMenu();
	initTextField();
}