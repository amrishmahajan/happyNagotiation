import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  isHemBurgerClick: boolean = false;
  @Output() hemBurgerClick: EventEmitter<boolean> = new EventEmitter();

  onHemBurgerClick() {
    this.isHemBurgerClick = !this.isHemBurgerClick;
    this.hemBurgerClick.emit(this.isHemBurgerClick);
  }

}