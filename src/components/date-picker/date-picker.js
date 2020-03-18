class DatePicker {
	constructor(id, myDatepicker) {
		this.datePicker = document.getElementById(id);
		this.inputArrival = this.datePicker.querySelector('.date-picker__input--arrival');
		this.inputDeparture = this.datePicker.querySelector('.date-picker__input--departure');
		
		this.myDatepicker = myDatepicker;
		this.datePickerContent = this.myDatepicker.$content[0];
		this.datePickerNav = this.myDatepicker.$nav[0].querySelector('.datepicker--nav-title');
		this.datePickerButtons = this.myDatepicker.$datepicker[0].querySelector('.datepicker--buttons');

		this.initDatePicker();
	}

	initDatePicker() {
		this.showDatePicker();
		this.addButtonInDataPicker();
		this.closeDatePicker();
		this.deletingCommaInNav();
		this.changeValueInput();
	}

	showDatePicker() {
		if (this.inputDeparture === null) return;

		this.inputDeparture.onclick = () => {
			this.myDatepicker.show();
		}
	}

	closeDatePicker() {
		this.button.onclick = () => {
			this.myDatepicker.hide();
		}
	}

	addButtonInDataPicker() {
		let buttonsContainer = this.datePickerButtons;
		this.button = document.createElement('span');
		this.button.textContent = 'применить';
		this.button.classList.add('datepicker--button-use');

		buttonsContainer.appendChild(this.button);
	}

	changeValueInput() {
		this.datePickerContent.onclick = (evt) => {
			let target = evt.target;

			if ((target.tagName === 'DIV') && (target.classList.contains('datepicker--cell'))) {
		 		let arrayDatePickerValues = this.inputArrival.value.split(',');
		 		this.inputArrival.value = arrayDatePickerValues[0];

		 		(arrayDatePickerValues[1] === undefined) ? this.inputDeparture.value = 'ДД.ММ.ГГГГ':
		 																							 this.inputDeparture.value = arrayDatePickerValues[1];
			}			
		}
	}

	deletingCommaInNav() {
		let titleMonth = this.datePickerNav.textContent;
				titleMonth = titleMonth.replace(',', '');

		this.datePickerNav.textContent = titleMonth;
	}
}

$('#date-picker').datepicker({
	range: true,
	inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

let myDatepicker = $('#date-picker').datepicker().data('datepicker'); 
let datepicker = new DatePicker('date-picker-wrapper', myDatepicker);


/*Инструкция для того, чтобы установить плагин

1. обратиться к самому плагину с параметрами 
$('#date-pickers').datepicker({
	range: true,
	// inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

2. заыести свой datepicker let myDatepickers = $('#date-pickers').datepicker().data('datepicker'); 
3. обьявить класс 