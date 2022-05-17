import { Inject, Injectable, InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RIL_LANGUAGE } from '../../public-api';

@Injectable({ providedIn: 'any' })
export class ValidationService {
	constructor(@Inject(RIL_LANGUAGE) private lang) {}

	public getValidatorErrorMessage(
		validatorName: string,
		validatorValue?: any,
		exampleValue?: string
	) {
		let config = {
			required: this.lang.error.required,
			email: this.lang.error.email,
			pattern: this.lang.error.pattern,
			minlength:
				this.lang.error.please_min +
				validatorValue.requiredLength +
				this.lang.error.char_enter,
			maxlength:
				this.lang.error.please_max +
				validatorValue.requiredLength +
				this.lang.error.char_enter,
		};

		if (exampleValue && validatorName == 'pattern') {
			config[validatorName] += ' ÖR. ' + exampleValue;
		}

		return config[validatorName];
	}

	public markFormGroupTouched(formGroup: FormGroup) {
		(Object as any).values(formGroup.controls).forEach((control) => {
			control.markAsTouched();

			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}
}
