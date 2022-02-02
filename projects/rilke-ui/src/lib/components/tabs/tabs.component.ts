import {
	Component,
	ContentChildren,
	QueryList,
	Input,
	AfterContentInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { TabComponent } from './tab/tab.component';

@Component({
	selector: 'ril-tabs',
	templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterContentInit {
	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

	@Input() scrollable: boolean;
	@Input() icon: string;
	currentIndex: number;

	@Input() index: number;

	constructor(private router: Router) {
		this.scrollable = false;
	}

	ngAfterContentInit() {
		let activeTabs = this.tabs.filter((tab) => tab.active);

		if (this.index) {
			this.selectTab(this.tabs[this.index]);
		} else if (activeTabs.length === 0) {
			this.selectTab(this.tabs.first);
		} else {
			this.tabs.toArray().forEach((tab, index) => {
				if (tab.active) {
					this.currentIndex = index;
				}
			});
		}
	}

	selectTab(selected_tab) {
		this.tabs.toArray().forEach((tab, index) => {
			tab.active = false;

			if (selected_tab == tab) {
				this.currentIndex = index;
			}
		});

		selected_tab.active = true;
	}

	setIndex(i) {
		this.selectTab(this.tabs.toArray()[i]);
	}

	onClick(selected_tab) {
		if (selected_tab.link) {
			this.router.navigate([selected_tab.link]);
		}
	}
}
