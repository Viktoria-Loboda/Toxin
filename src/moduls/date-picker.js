(function() {
$('#datepicker-here').datepicker({
	range: true,
	// inline: true,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

// сделать стили для датапикера

/*изменить все на datapicker а не date */
// var myDatepicker = $('#datepicker-arrival').datepicker().data('datepicker'); 
// var dataPickerContent = document.querySelector('.datepicker--content');

// var buttonClear = document.querySelector('.datepicker--button');
// var buttonSearch = document.querySelector('.room-search__button');
// var inputArrival = document.querySelector('#datepicker-arrival');
// var inputDeparture = document.querySelector('#datepicker-departure');

// var inputGuest = document.querySelector('.select__input');

// inputDeparture.addEventListener('click', function() {
// 	myDatepicker.show();
// });

// buttonClear.addEventListener('click', function() {
// 	inputArrival.value = 'ДД.ММ.ГГГГ';
// 	inputDeparture.value = 'ДД.ММ.ГГГГ';
// });

// buttonSearch.addEventListener('click', function() {
// 	localStorage.setItem('dataArrival', inputArrival.value);
// 	localStorage.setItem('dataDeparture', inputDeparture.value);
// 	localStorage.setItem('countGuest', inputGuest.value);
// });

// dataPickerContent.addEventListener('click', ({target}) => {
// 	if ((target.tagName === 'DIV') && (target.classList.contains('datepicker--cell'))) {
// 		var dataPickerValue = document.querySelector('#datepicker-arrival').value;
// 		var arrDataPickerValue = dataPickerValue.split(',');

// 		inputArrival.value = arrDataPickerValue[0];
// 		if (arrDataPickerValue[1] === undefined) {
// 			inputDeparture.value = 'ДД.ММ.ГГГГ';
// 		} else {
// 			inputDeparture.value = arrDataPickerValue[1];
// 		}
// 	}
// });

// function addButtonInDataPicker() {
// 	var parent = document.querySelector('.datepicker--buttons');
// 	var button =  document.createElement('span');
// 			button.textContent = 'применить';
// 			button.classList.add('datepicker--button-use');

// 	parent.appendChild(button);

// 	document.querySelector('.datepicker--button-use').addEventListener('click', function() {
// 		myDatepicker.hide();
// 	});
// }

// function dataPickerMonth() {
// 	var textMonth = document.querySelector('.datepicker--nav-title').textContent;
// 	textMonth = textMonth.replace(",", "");

// 	document.querySelector('.datepicker--nav-title').textContent = textMonth;
// }

// addButtonInDataPicker();
// dataPickerMonth();
})();