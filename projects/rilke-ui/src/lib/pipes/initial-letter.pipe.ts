import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "initialLetter"
})
export class InitialLetterPipe implements PipeTransform {
	transform(fullName: string): any {
		let initialLetter = fullName.split(/\s+/).map(n => n[0]).join("");

		return initialLetter.substr(0,3);
	}
}