/**
 * Main JS file for Casper behaviours
 */

(function() {
	document.addEventListener('DOMContentLoaded', function(e) {
		const dateElements = document.querySelectorAll('.post-date');
		Array.prototype.forEach.call(dateElements, function(el, i){
			const dateFormat = moment(el.getAttribute('datetime')).format('dddd, MMMM DD, YYYY');
			el.innerHTML = dateFormat;
		});
	});
})();
