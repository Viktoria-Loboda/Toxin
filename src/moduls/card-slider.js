(function () {
	var cards = document.querySelectorAll('.card');
	var slideIndex = [];

	function showSlides(elem, index) { 
		let slides = elem.querySelectorAll('.card-slide__item');

		if (slideIndex[index] > slides.length) {
			slideIndex[index] = 1;
		}

		if (slideIndex[index] < 1) {
			slideIndex[index] = slides.length;
		}

		for (let i=0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		slides[slideIndex[index] - 1].style.display = "block";
	}

	function plusSlide(elem, index) {
		var next = elem.querySelector('.card-slide__btn--next');

		next.addEventListener('click', function() {
			slideIndex[index] += 1;
			showSlides(elem, index);
		});
	}

	function minusSlide(elem, index) {
		var prev = elem.querySelector('.card-slide__btn--prev');

		prev.addEventListener('click', function() {
			slideIndex[index] -= 1;
			showSlides(elem, index);
		});
	}

	function currentSlide(elem, index) {
		var dots = elem.querySelector('.card-slide__dots');

		dots.addEventListener('click', function(evt) {
			let target = evt.target;

			if (target.tagName != 'SPAN') return;

			var dotPrev = elem.querySelector('.card-slide__dots-item.active');
			dotPrev.classList.remove('active');
			target.classList.add('active');

			slideIndex[index] = target.id;
			showSlides(elem, index);
		});
	}

	for (let i=0; i < cards.length; i++) {
		slideIndex.push(1);
		showSlides(cards[i], i);
		plusSlide(cards[i], i);
		minusSlide(cards[i], i);
		currentSlide(cards[i], i);
	}
})();