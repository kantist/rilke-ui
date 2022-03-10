import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidationService {
	lang: any;

	constructor() { }

	public getValidatorErrorMessage(validatorName: string, validatorValue?: any, exampleValue?: string) {
		let config = {
			required: this.lang.error.required,
			email: this.lang.error.email,
			pattern: this.lang.error.pattern,
			minlength: this.lang.error.please_min + validatorValue.requiredLength + this.lang.error.char_enter,
			maxlength: this.lang.error.please_max + validatorValue.requiredLength + this.lang.error.char_enter,
		};

		if (exampleValue && validatorName == 'pattern') {
			config[validatorName] += ' ÖR. ' + exampleValue;
		}

		return config[validatorName];
	}

	public markFormGroupTouched(formGroup: FormGroup) {
		(<any>Object).values(formGroup.controls).forEach(control => {
			control.markAsTouched();

			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}
}