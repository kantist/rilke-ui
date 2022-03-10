import { Component, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validator.service';

const validator = new ValidationService();

@Component({
	selector: 'ril-form-description',
	templateUrl: './form-description.component.html'
})
export class FormDescriptionComponent {
	_errorMessage: string;

	@HostBinding('class.ril-form-description') true;

	@Input() control: FormControl;
	@Input() example: string;
	@Input() exception: string;

	constructor() { }

	get errorMessage(): string {
		for (let propertyName in this.control.errors) {
			if (
				this.control.errors.hasOwnProperty(propertyName) &&
				(!this.control.pristine || this.control.touched)
			) {
				return validator.getValidatorErrorMessage(
					propertyName,
					this.control.errors[propertyName],
					this.example
				);
			}
		}

		if (!this.control.invalid && this.exception) {
			return this.exception
		}

		return null;
	}
}
