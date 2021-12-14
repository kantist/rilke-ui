import {
	Component,
	ContentChildren,
	QueryList,
	Input,
	OnInit,
	AfterContentInit,
	OnChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { KATabComponent } from './tab/tab.component';

@Component({
	selector: 'ka-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
})
export class KATabsComponent implements AfterContentInit {
	@ContentChildren(KATabComponent) tabs: QueryList<KATabComponent>;

	@Input() scrollable: boolean;
	@Input() icon: string;
	@Input() navigation: boolean;
	currentIndex: number = 0;

	@Input() index: number;

	constructor(private router: Router) {
		this.scrollable = false;
		this.navigation = false;
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
