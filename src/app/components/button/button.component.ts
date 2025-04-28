import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cButton',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() click = new EventEmitter<void>()
  @Input() type = "button"
  @Input() disabled = false

  handleClick (event: Event) {
    // event.preventDefault()
    this.click.emit()
  }
}
