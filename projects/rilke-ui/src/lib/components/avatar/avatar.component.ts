import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ril-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @HostBinding('class.ril-avatar') true: boolean = true;
  @Input() src: string;
  @Input() icon: string;
  @Input() initial: string;
  @Input() size: number;
  @Input() alt: string;
  @HostBinding('class.selectable') @Input() selectable: boolean;
  @HostBinding('style.height') get height() {
    return `${this.size}rem`;
  }
  @HostBinding('style.width') get width() {
    return `${this.size}rem`;
  }
  @HostBinding('style.fontSize') get fontSize() {
    return `${this.size / 2}rem`;
  }

  constructor() {
    this.size = 3;
    this.src = '';
    this.icon = '';
    this.selectable = false;
    this.alt = 'avatar image';
  }

  ngOnInit() {}
}
